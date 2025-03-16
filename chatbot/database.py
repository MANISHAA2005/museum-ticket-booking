from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["museum_booking"]
chat_collection = db["chat_queries"]

def save_user_query(user_input, bot_response):
    """Saves chatbot interactions in MongoDB"""
    chat_data = {"user_message": user_input, "bot_response": bot_response}
    chat_collection.insert_one(chat_data)
