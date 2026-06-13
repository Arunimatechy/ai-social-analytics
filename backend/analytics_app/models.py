
from django.db import models
from django.conf import settings


class AnalysisHistory(models.Model):

    SENTIMENT_CHOICES = (
        ("POSITIVE", "POSITIVE"),
        ("NEGATIVE", "NEGATIVE"),
        ("NEUTRAL", "NEUTRAL"),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="analyses"
    )

    text = models.TextField()

    sentiment = models.CharField(
        max_length=20,
        choices=SENTIMENT_CHOICES
    )

    emotion = models.CharField(
        max_length=50,
        null=True,
        blank=True
    )

    confidence = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.sentiment}"