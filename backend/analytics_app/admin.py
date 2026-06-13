
from django.contrib import admin
from .models import AnalysisHistory


@admin.register(AnalysisHistory)
class AnalysisHistoryAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "sentiment",
        "emotion",
        "confidence",
        "created_at"
    )

    list_filter = (
        "sentiment",
        "created_at"
    )

    search_fields = (
        "text",
        "user__username"
    )