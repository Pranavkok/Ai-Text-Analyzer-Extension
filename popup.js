let prompt;

document.addEventListener("DOMContentLoaded", () => {
    const selectedTextSpan = document.getElementById("selectedText");
    const aiResponse = document.getElementById("aiResponse");

    // const closeBtn = document.getElementById("closeBtn");


    chrome.storage.local.get("selectedText", (data) => {
        if (data.selectedText) {
            selectedTextSpan.textContent = data.selectedText;
            prompt = data.selectedText;
        }
    });
    // closeBtn.addEventListener("click", () => window.close());
});

document.getElementById("analyzeBtn").addEventListener("click", function () {
    fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message:prompt})
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response:", data);
        if (data.ai_response) {
            aiResponse.textContent = data.ai_response;  // Display AI response in popup
        }
    })
    .catch(error => console.error("Error:", error));
});



