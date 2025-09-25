document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script is running"); // Debug check

  const cards = document.querySelectorAll(".card");
  let chances = 2;
  let answered = false;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (answered) return;

      if (card.dataset.correct === "true") {
        card.querySelector(".card-front").style.backgroundColor = "#4CAF50"; // green
        card.querySelector(".card-front").style.color = "white";
        alert("✅ Correct! Moving to next stage...");
        answered = true;
      } else {
        card.querySelector(".card-front").style.backgroundColor = "#f44336"; // red
        card.querySelector(".card-front").style.color = "white";
        chances--;

        if (chances > 0) {
          alert(`❌ Wrong! Try again. Chances left: ${chances}`);
        } else {
          alert("❌ Wrong twice! Revealing correct answer...");
          cards.forEach(c => c.classList.add("flipped"));
          answered = true;
        }
      }
    });
  });
});
