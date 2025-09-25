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
