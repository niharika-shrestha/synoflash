document.addEventListener("DOMContentLoaded", () => {
  let currentStage = 1;
  let chances = 2;
  const totalStages = 3; // total number of stages

  function setupStage(stageNumber, correctAnswer) {
    const stage = document.getElementById(`stage${stageNumber}`);
    const cards = stage.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        if (stage.dataset.completed === "true") return;

        const selected = card.querySelector(".front").innerText.trim();

        // ✅ Correct answer
        if (selected === correctAnswer) {
          card.classList.add("correct");
          stage.dataset.completed = "true";

          setTimeout(() => {
            stage.style.display = "none";
            currentStage++;
            const nextStage = document.getElementById(`stage${currentStage}`);
            if (nextStage) {
              nextStage.style.display = "block";
              chances = 2; // reset chances
            } else {
              alert("🎉 Congrats! You mastered all the words!");
            }
          }, 1000);

        // ❌ Wrong answer
        } else {
          card.classList.add("wrong");
          chances--;

          // Out of chances
          if (chances <= 0) {
            cards.forEach(c => c.classList.add("flip"));
            stage.dataset.completed = "true";

            setTimeout(() => {
              stage.style.display = "none";

              // ✅ If last stage → FAIL
              if (stageNumber === totalStages) {
                alert("❌ You failed! Try again.");
              } else {
                // Otherwise → move to next stage
                currentStage++;
                const nextStage = document.getElementById(`stage${currentStage}`);
                if (nextStage) {
                  nextStage.style.display = "block";
                  chances = 2;
                }
              }
            }, 2000);
          }
        }
      });
    });
  }

  // ✅ Setup each stage with correct answers
  setupStage(1, "Talkative");
  setupStage(2, "Generous");
  setupStage(3, "Precise");
});
