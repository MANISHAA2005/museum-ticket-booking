from transitions import Machine
from database import save_user_query
from prompt_templates import get_prompt
import requests

# Define chatbot states
states = ["greeting", "museum_selection", "ticket_count", "confirm_booking", "final"]

class MuseumChatbot:
    def __init__(self):
        self.machine = Machine(model=self, states=states, initial="greeting")
        
        # Define transitions
        self.machine.add_transition("select_museum", "greeting", "museum_selection")
        self.machine.add_transition("choose_tickets", "museum_selection", "ticket_count")
        self.machine.add_transition("confirm", "ticket_count", "confirm_booking")
        self.machine.add_transition("complete", "confirm_booking", "final")

    def get_response(self, user_input):
        """Handles chatbot responses based on FSM state"""
        if self.state == "greeting":
            self.select_museum()
            return {"text": "Which museum?", "options": ["Art", "History", "Science"]}
        
        elif self.state == "museum_selection":
            self.choose_tickets()
            return {"text": "How many tickets?", "options": ["1", "2", "3", "4+"]}
        
        elif self.state == "ticket_count":
            self.confirm()
            return {"text": "Confirm booking?", "options": ["Yes", "No"]}
        
        elif self.state == "confirm_booking":
            if user_input.lower() == "yes":
                self.complete()
                return {"text": "Booking confirmed! You’ll receive a QR code via email."}
            else:
                self.to_greeting()
                return {"text": "Booking cancelled. Start again?"}
        
        return {"text": "I didn't understand. Can you repeat?"}

# Initialize chatbot
chatbot = MuseumChatbot()

def chatbot_response(user_input):
    """Processes user input and returns chatbot response"""
    response = chatbot.get_response(user_input)
    save_user_query(user_input, response["text"])
    return response
