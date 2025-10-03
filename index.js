let holes = document.querySelectorAll(".hole");
let score = 0
let scoreDisplay = document.getElementById("score")
let startBtn = document.getElementById("start-btn")
let gameInterval
let timeLeft = 30
let timeDisplay = document.getElementById("time")
let timeInterval


startBtn.addEventListener("click", () => {
  clearInterval(gameInterval)
  clearInterval(timeInterval)

  score = 0
  scoreDisplay.textContent = "Score: " + score

  timeLeft = 30
  timeDisplay.textContent = "Time: " + timeLeft

  gameInterval = setInterval(showMole, 1500)

  timeInterval = setInterval(() => {
    timeLeft--
    timeDisplay.textContent = "Time: " + timeLeft

    if (timeLeft <= 0) {
        clearInterval(gameInterval)
        clearInterval(timeInterval)
        alert("Game over! Final score: " + score)
    }
  }, 1000)
});

function randomHole() {
  let index = Math.floor(Math.random() * holes.length)
  return holes[index]
}

function showMole() {
  let hole = randomHole()
  hole.classList.add("active")
  
  setTimeout(() => {
    hole.classList.remove("active")
  }, 850)
}


holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole.classList.contains("active")) {
            score++
            scoreDisplay.textContent = "Score: " + score
            hole.classList.remove("active")
        }
    })
})
