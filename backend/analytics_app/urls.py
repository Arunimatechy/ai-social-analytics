from django.urls import path

from .views import (
    SentimentAnalysisView,
    EmotionDetectionView,
    AnalyzeTextView,
    HistoryView,
    DeleteHistoryView,
    DashboardView,
    AnalyticsSummaryView,
    ExportCSVView,
    ExportExcelView,
    ExportPDFView,
)


urlpatterns = [

    path("sentiment/", SentimentAnalysisView.as_view()),
    path("emotion/", EmotionDetectionView.as_view()),
    path("analyze/", AnalyzeTextView.as_view()),

    path("history/", HistoryView.as_view()),
    path("history/<int:pk>/delete/", DeleteHistoryView.as_view()),

    path("dashboard/", DashboardView.as_view()),
    path("analytics-summary/", AnalyticsSummaryView.as_view()),

    path("export/csv/", ExportCSVView.as_view()),
    path("export/excel/", ExportExcelView.as_view()),
    path("export/pdf/", ExportPDFView.as_view()),
]