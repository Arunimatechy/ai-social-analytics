from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()


def analyze_sentiment(text):

    scores = analyzer.polarity_scores(text)

    compound = scores["compound"]

    if compound >= 0.05:
        sentiment = "POSITIVE"

    elif compound <= -0.05:
        sentiment = "NEGATIVE"

    else:
        sentiment = "NEUTRAL"

    return {
        "sentiment": sentiment,
        "confidence": round(abs(compound) * 100, 2)
    }


def detect_emotion(text):

    text = text.lower()

    emotions = {
        "joy": [
            "happy",
            "love",
            "great",
            "awesome",
            "excellent",
            "amazing",
        ],

        "sadness": [
            "sad",
            "cry",
            "depressed",
            "unhappy",
        ],

        "anger": [
            "hate",
            "angry",
            "mad",
            "annoyed",
        ],

        "fear": [
            "fear",
            "afraid",
            "scared",
            "worried",
        ],
    }

    for emotion, keywords in emotions.items():

        for word in keywords:

            if word in text:

                return {
                    "emotion": emotion,
                    "confidence": 80
                }

    return {
        "emotion": "neutral",
        "confidence": 50
    }


def analyze_text(text):

    sentiment_result = analyze_sentiment(text)

    emotion_result = detect_emotion(text)

    return {
        "sentiment": sentiment_result["sentiment"],
        "emotion": emotion_result["emotion"],
        "confidence": max(
            sentiment_result["confidence"],
            emotion_result["confidence"]
        )
    }