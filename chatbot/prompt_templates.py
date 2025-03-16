def get_prompt(state):
    """Returns predefined chatbot prompts based on state"""
    prompts = {
        "greeting": "Which museum?",
        "museum_selection": "How many tickets?",
        "ticket_count": "Confirm booking?",
        "confirm_booking": "Booking confirmed! QR code sent."
    }
    return prompts.get(state, "I didn't understand. Can you repeat?")
