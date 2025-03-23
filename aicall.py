import requests
import json

def get_ai_response(message):
    url = "https://api.arliai.com/v1/chat/completions"

    payload = json.dumps({
      "model": "Mistral-Nemo-12B-Instruct-2407",
      "messages": [
        {"role": "system", "content": "You are a website surfing asistant,the user will send a selected text and you have to give information about the selected text in one line"},
        {"role": "user", "content": "Hello!"},
        {"role": "assistant", "content": "Hi!, how can I help you today?"},
        {"role": "user", "content": f"selected text :{message}"}
      ],
      "repetition_penalty": 1.1,
      "temperature": 0.7,
      "top_p": 0.9,
      "top_k": 40,
      "max_tokens": 100,
      "stream": False
    })
    headers = {
      'Content-Type': 'application/json',
      'Authorization': f"Bearer ee2c0868-26ed-4774-9e73-5f276164fc89"
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    ans = list(response)[1]
    return ans