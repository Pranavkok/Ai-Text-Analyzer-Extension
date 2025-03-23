# AI Browsing Assistant Chrome Extension

A **Chrome Extension** that allows users to analyze selected text on any webpage using an AI model. The extension fetches AI-generated responses and displays them in a popup window.

## 🚀 Features
- **Right-click Selection**: Select text and analyze it via the context menu.
- **Popup Window**: Displays selected text and AI-generated response.
- **AI Integration**: (Planned) Uses OpenAI API to generate insights.
- **User-friendly UI**: Clean and simple design for ease of use.

---

## 📌 How to Use
### 1️⃣ Install the Extension Locally
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Pranavkok/Ai-Text-Analyzer-Extension.git
   cd Ai-Text-Analyzer-Extension
   ```
2. **Load the Extension in Chrome**:
   - Open `chrome://extensions/` in your browser.
   - Enable **Developer Mode** (top-right corner).
   - Click **Load Unpacked** and select the extension folder.

### 2️⃣ Start the Backend Server
This extension requires a Python Flask backend to process AI responses.
1. Install dependencies:
   ```sh
   pip install flask
   ```
2. Run the server:
   ```sh
   python app.py
   ```
   The server will run at `http://127.0.0.1:5000/`

### 3️⃣ Use the Extension
1. **Select text** on any webpage.
2. **Right-click → Choose 'Analyzer'** from the context menu.
3. The **popup will open** with the selected text.
4. Click **'Analyze'** to fetch the AI response (ensure the backend is running).

---

## 🎥 Project Demo
https://drive.google.com/drive/folders/1-RN9hvKxN4Ly7fgoiIqZuP7GDGTQGxZk

---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript (Chrome Extension)
- **Backend:** Python, Flask (AI Processing)
- **API:** Mistral Nemo 12B instruct 2407

---

## 📌 Future Enhancements
- ✅ Integrate OpenAI API for AI responses
- ✅ Improve UI with better design
- ✅ Add more customization options for text analysis

---

### 🔗 Author
**Pranav Kok** - [GitHub](https://github.com/Pranavkok)

Feel free to **contribute** or raise issues! 🚀

