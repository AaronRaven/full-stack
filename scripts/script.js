document.addEventListener("DOMContentLoaded", function() {
    const changeMessageBtn = document.getElementById("change-message-btn");
    if (changeMessageBtn) {
        changeMessageBtn.addEventListener("click", changeMessage);
    } else {
        console.error("Button not found");
    }
});

// Array of messages
const messages = [
    "I find that the harder I work, the more luck I seem to have!",
    "The only place where success comes before work is in the dictionary!",
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do!",
];

// Function to change the message
function changeMessage() {
    const messageContainer = document.getElementById("message-container");
    const randomIndex = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randomIndex];
    const messageElement = document.createElement("p");
    messageElement.textContent = newMessage;
    messageElement.classList.add("fade-in");
    messageContainer.innerHTML = "";
    messageContainer.appendChild(messageElement);
}