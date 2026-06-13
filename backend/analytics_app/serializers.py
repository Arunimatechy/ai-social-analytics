from rest_framework import serializers
from .models import AnalysisHistory


class SentimentSerializer(serializers.Serializer):
    text = serializers.CharField()


class EmotionSerializer(serializers.Serializer):
    text = serializers.CharField()


class AnalysisHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = AnalysisHistory
        fields = [
            "id",
            "text",
            "sentiment",
            "emotion",
            "confidence",
            "created_at",
        ]