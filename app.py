from flask import Flask, request, jsonify
from flask_cors import CORS  
import aicall

app = Flask(__name__)
CORS(app)  # Enable CORS for JavaScript requests

@app.route('/', methods=['POST'])  # Ensure 'POST' is listed
def receive_string():
    data = request.json  # Extract JSON data
    received_string = data['message']  # Get the message field
    message = {"received": received_string}['received']
    ans = aicall.get_ai_response(message)
    if isinstance(ans, bytes):
        ans = ans.decode("utf-8").split('"')[14]  # Convert bytes to string
    print(ans)
    return jsonify({"status": "Success", "received": received_string, "ai_response": ans})

if __name__ == '__main__':
    app.run(port=5000, debug=True)  # Allow external access

