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
