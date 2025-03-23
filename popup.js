let prompt;

document.addEventListener("DOMContentLoaded", () => {
    const selectedTextSpan = document.getElementById("selectedText");
    const aiResponse = document.getElementById("aiResponse");
    const analyzeBtn = document.getElementById("analyzeBtn");

    chrome.storage.local.get("selectedText", (data) => {
        if (data.selectedText) {
            selectedTextSpan.textContent = data.selectedText;
            prompt = data.selectedText;
        }
    });
});

document.getElementById("analyzeBtn").addEventListener("click", function () {
    const analyzeBtn = document.getElementById("analyzeBtn");
    analyzeBtn.textContent = "Analyzing...";
    analyzeBtn.disabled = true;

    fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response:", data);
        if (data.ai_response) {
            aiResponse.textContent = data.ai_response;  
        }
    })
    .catch(error => {
        console.error("Error:", error);
        aiResponse.textContent = "Error fetching response.";
    })
    .finally(() => {
        analyzeBtn.textContent = "Analyze";
        analyzeBtn.disabled = false; 
    });
});
