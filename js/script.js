document.addEventListener("DOMContentLoaded", () => {
  let currentStage = 1;
  let chances = 2;

  function setupStage(stageNumber, correctAnswer) {
    const stage = document.getElementById(`stage${stageNumber}`);
    const cards = stage.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        if (stage.dataset.completed === "true") return;

        const selected = card.querySelector(".front").innerText.trim();

        if (selected === correctAnswer) {
          card.classList.add("correct");
          stage.dataset.completed = "true";

          setTimeout(() => {
            stage.style.display = "none";
            currentStage++;
            const nextStage = document.getElementById(`stage${currentStage}`);
            if (nextStage) {
              nextStage.style.display = "block";
              chances = 2;
            } else {
              alert("🎉 Congrats! You mastered all the words!");
            }
          }, 1000);
        } else {
          card.classList.add("wrong");
          chances--;

          if (chances <= 0) {
            cards.forEach(c => c.classList.add("flip"));
            stage.dataset.completed = "true";

            setTimeout(() => {
              stage.style.display = "none";
              currentStage++;
              const nextStage = document.getElementById(`stage${currentStage}`);
              if (nextStage) {
                nextStage.style.display = "block";
                chances = 2;
              } else {
                alert("🎉 Congrats! You mastered all the words!");
              }
            }, 2000);
          }
        }
      });
    });
  }

  // Setup all stages with correct answers
  setupStage(1, "Talkative");
  setupStage(2, "Generous");
  setupStage(3, "Precise");
});
