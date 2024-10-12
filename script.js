// Mapowanie poprawnych kodów na konkretne strony
const codes = {
    "GAME": "1task.html",  // Pierwszy kod przekierowuje do 1task.html
    "DATE": "2task.html",  // Drugi kod przekierowuje do 2task.html
    "BIRTHDAY": "3task.html",
    "GIFTS": "4task.html", 
    "MURZYNEK": "5task.html",
    "NOVEMBER": "6task.html",
    "MORDEN": "7task.html",    
    "E": "8task.html",  
    "188": "9task.html", 
    "F": "10task.html",
    "KFCPICNIC": "11task.html",
    "CHICKEN": "12task.html",
    "BOTTLED": "13task.html",
    "17:30": "14task.html",
    "MYSTERY": "15task.html",
    "PHANTOMPEAK": "16task.html",
    "JES": "17task.html",
    "10": "18task.html",
};

const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
    const userInput = codeInput.value.trim();
    if (codes[userInput]) {
        message.textContent = "Congrats! Let's go!";
        setTimeout(() => {
            window.location.href = codes[userInput];  // Przekierowanie do odpowiedniej strony
        }, 2000);
    } else {
        message.textContent = "Try again...";
    }
});