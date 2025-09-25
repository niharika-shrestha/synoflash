// Button click test
document.getElementById("clickBtn").addEventListener("click", function() {
  alert("Hello from Synoflash ⚡🚀✨!");
});

// Simple form submission (no backend yet)
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Message sent! (Demo only)");
});
// 🌙 Dark Mode Toggle
document.getElementById("darkModeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // Change button text dynamically
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "☀️ Light Mode";
  } else {
    this.textContent = "🌙 Dark Mode";
  }
});

// Mark card as mastered
document.querySelectorAll(".master-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.stopPropagation(); // avoid re-flip
    this.closest(".card").style.opacity = "0.5"; // faded effect
    this.textContent = "Mastered ✔";
    this.disabled = true;
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-option");
    let chances = 2; // user has 2 chances

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (card.dataset.correct === "true") {
                card.style.backgroundColor = "#4CAF50"; // green
                card.style.color = "white";
                alert("✅ Correct! Moving to next stage soon...");
                // TODO: you can add logic here to load next question
            } else {
                if (chances > 1) {
                    chances--;
                    card.style.backgroundColor = "#f44336"; // red
                    card.style.color = "white";
                    alert(`❌ Wrong! Try again. Chances left: ${chances}`);
                } else {
                    card.style.backgroundColor = "#f44336"; // final wrong
                    card.style.color = "white";
                    alert("❌ Wrong again. Game Over!");
                    // Optionally reset game or lock question
                }
            }
        });
    });
});
