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
let chances = 2; 
let correctAnswer = "Application Programming Interface"; 

document.querySelectorAll(".quiz-card").forEach(card => {
  card.addEventListener("click", function() {
    if (this.textContent === correctAnswer) {
      this.classList.add("correct");
      document.getElementById("feedback").textContent = "✅ Correct! Moving to next stage...";
      setTimeout(() => {
        nextQuestion(); // load next question
      }, 1500);
    } else {
      if (chances > 0) {
        this.classList.add("wrong");
        document.getElementById("feedback").textContent = `❌ Wrong! You have ${chances} chance(s) left.`;
        chances--;
      } else {
        document.getElementById("feedback").textContent = "😢 Out of chances! Try again.";
      }
    }
  });
});

// Example next question loader
function nextQuestion() {
  document.getElementById("question").textContent = "Which language runs in a web browser?";
  let cards = document.querySelectorAll(".quiz-card");
  let answers = ["Python", "C++", "Java", "JavaScript", "Ruby", "PHP"];
  correctAnswer = "JavaScript";
  chances = 2;

  cards.forEach((card, index) => {
    card.textContent = answers[index];
    card.classList.remove("correct", "wrong");
  });

  document.getElementById("feedback").textContent = "";
}
 
// Select all option cards
const optionCards = document.querySelectorAll(".option-card");

// Correct answer text (must exactly match the card text)
// Use the existing correctAnswer variable defined above

// Track number of attempts
let attempts = 0;

optionCards.forEach(card => {
  card.addEventListener("click", () => {
    // Reset styles first
    optionCards.forEach(c => c.style.backgroundColor = "");

    if (card.innerText === correctAnswer) {
      card.style.backgroundColor = "#4CAF50"; // Green for correct
      alert("✅ Correct! Moving to next stage...");
      // You can later add logic to load next question
    } else {
      card.style.backgroundColor = "#F44336"; // Red for wrong
      attempts++;

      if (attempts < 2) {
        alert("❌ Wrong! Try again.");
      } else {
        alert("❌ Wrong again! The correct answer is: " + correctAnswer);
        // Lock options after 2 attempts
        optionCards.forEach(c => c.style.pointerEvents = "none");
      }
    }
  });
});
