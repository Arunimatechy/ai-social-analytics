from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.core.paginator import Paginator
from .serializers import (
    SentimentSerializer,
    EmotionSerializer,
    AnalysisHistorySerializer,
)
import pandas as pd
from django.http import HttpResponse
from openpyxl import Workbook
from django.http import HttpResponse
from .services import (
    analyze_sentiment,
    detect_emotion,
    analyze_text,
)
from reportlab.platypus import (
    SimpleDocTemplate,
    Table,
    TableStyle,
)
from collections import Counter
from reportlab.lib import colors

from io import BytesIO

from django.http import HttpResponse


from .models import AnalysisHistory


class SentimentAnalysisView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = SentimentSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        text = serializer.validated_data["text"]

        result = analyze_sentiment(text)

        AnalysisHistory.objects.create(
            user=request.user,
            text=text,
            sentiment=result["sentiment"],
            confidence=result["confidence"],
        )

        return Response(result)


class EmotionDetectionView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = EmotionSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        text = serializer.validated_data["text"]

        result = detect_emotion(text)

        AnalysisHistory.objects.create(
            user=request.user,
            text=text,
            sentiment="NEUTRAL",
            emotion=result["emotion"],
            confidence=result["confidence"],
        )

        return Response(result)


class AnalyzeTextView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = SentimentSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        text = serializer.validated_data["text"]

        result = analyze_text(text)

        AnalysisHistory.objects.create(
            user=request.user,
            text=text,
            sentiment=result["sentiment"],
            emotion=result["emotion"],
            confidence=result["confidence"],
        )

        return Response(result)


class HistoryView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        histories = AnalysisHistory.objects.filter(
            user=request.user
        )

        sentiment = request.GET.get("sentiment")

        if sentiment:
            histories = histories.filter(
                sentiment=sentiment
            )

        emotion = request.GET.get("emotion")

        if emotion:
            histories = histories.filter(
                emotion=emotion
            )

        search = request.GET.get("search")

        if search:
            histories = histories.filter(
                text__icontains=search
            )

        histories = histories.order_by(
            "-created_at"
        )

        paginator = Paginator(
            histories,
            5
        )

        page_number = request.GET.get(
            "page",
            1
        )

        page_obj = paginator.get_page(
            page_number
        )

        serializer = AnalysisHistorySerializer(
            page_obj,
            many=True
        )

        return Response({
            "current_page": page_obj.number,
            "total_pages": paginator.num_pages,
            "total_records": paginator.count,
            "results": serializer.data,
        })
class DeleteHistoryView(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):

        try:

            history = AnalysisHistory.objects.get(
                id=pk,
                user=request.user
            )

            history.delete()

            return Response({
                "message": "Deleted Successfully"
            })

        except AnalysisHistory.DoesNotExist:

            return Response(
                {
                    "error": "History not found"
                },
                status=404
            )


class DashboardView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        histories = AnalysisHistory.objects.filter(
            user=request.user
        )

        total = histories.count()

        positive = histories.filter(
            sentiment="POSITIVE"
        ).count()

        negative = histories.filter(
            sentiment="NEGATIVE"
        ).count()

        neutral = histories.filter(
            sentiment="NEUTRAL"
        ).count()

        return Response({
            "total_analysis": total,
            "positive": positive,
            "negative": negative,
            "neutral": neutral,

            "positive_percentage":
                round((positive / total) * 100, 2)
                if total else 0,

            "negative_percentage":
                round((negative / total) * 100, 2)
                if total else 0,

            "neutral_percentage":
                round((neutral / total) * 100, 2)
                if total else 0,
        })





class AnalyticsSummaryView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        histories = AnalysisHistory.objects.filter(
            user=request.user
        )

        total = histories.count()

        positive = histories.filter(
            sentiment="POSITIVE"
        ).count()

        negative = histories.filter(
            sentiment="NEGATIVE"
        ).count()

        neutral = histories.filter(
            sentiment="NEUTRAL"
        ).count()

        emotions = list(
            histories.values_list(
                "emotion",
                flat=True
            )
        )

        emotion_counts = Counter(emotions)

        return Response({

            "total_analysis": total,

            "positive": positive,
            "negative": negative,
            "neutral": neutral,

            "emotions": dict(emotion_counts),

            "top_emotion":
                max(
                    emotion_counts,
                    key=emotion_counts.get
                )
                if emotion_counts
                else "None",

            "positive_percentage":
                round((positive / total) * 100, 2)
                if total else 0,

            "negative_percentage":
                round((negative / total) * 100, 2)
                if total else 0,

            "neutral_percentage":
                round((neutral / total) * 100, 2)
                if total else 0,
        })







class ExportCSVView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        histories = AnalysisHistory.objects.filter(
            user=request.user
        ).values(
            "text",
            "sentiment",
            "emotion",
            "confidence",
            "created_at"
        )

        df = pd.DataFrame(list(histories))

        response = HttpResponse(
            content_type="text/csv"
        )

        response[
            "Content-Disposition"
        ] = 'attachment; filename="analysis_history.csv"'

        df.to_csv(
            path_or_buf=response,
            index=False
        )

        return response   

class ExportExcelView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        histories = AnalysisHistory.objects.filter(
            user=request.user
        )

        workbook = Workbook()

        sheet = workbook.active

        sheet.title = "Analysis History"

        headers = [
            "Text",
            "Sentiment",
            "Emotion",
            "Confidence",
            "Created At",
        ]

        sheet.append(headers)

        for history in histories:

            sheet.append([
                history.text,
                history.sentiment,
                history.emotion,
                history.confidence,
                str(history.created_at),
            ])

        response = HttpResponse(
            content_type=
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )

        response[
            "Content-Disposition"
        ] = 'attachment; filename="analysis_history.xlsx"'

        workbook.save(response)

        return response


class ExportPDFView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        histories = AnalysisHistory.objects.filter(
            user=request.user
        )

        buffer = BytesIO()

        pdf = SimpleDocTemplate(buffer)

        data = [
            [
                "Text",
                "Sentiment",
                "Emotion",
                "Confidence",
            ]
        ]

        for history in histories:

            data.append([
                history.text[:40],
                history.sentiment,
                history.emotion,
                str(history.confidence),
            ])

        table = Table(data)

        table.setStyle(
            TableStyle([
                (
                    "BACKGROUND",
                    (0, 0),
                    (-1, 0),
                    colors.lightgrey,
                ),

                (
                    "GRID",
                    (0, 0),
                    (-1, -1),
                    1,
                    colors.black,
                ),
            ])
        )

        pdf.build([table])

        buffer.seek(0)

        response = HttpResponse(
            buffer,
            content_type="application/pdf"
        )

        response[
            "Content-Disposition"
        ] = 'attachment; filename="analysis_report.pdf"'

        return response