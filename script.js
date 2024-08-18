// function updateClock() {
//   const clockElement = document.getElementById('clock')
//   const now = new Date()
//   const hours = String(now.getHours()).padStart(2, '0')
//   const minutes = String(now.getMinutes()).padStart(2, '0')
//   const seconds = String(now.getSeconds()).padStart(2, '0')
//   clockElement.textContent = `${hours}:${minutes}:${seconds}`
// }

// setInterval(updateClock, 1000)
// updateClock() // Initialize clock immediately
function startTimer() {
  const timerElement = document.getElementById('timer')

  function updateTimer() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    timerElement.textContent = `${hours}:${minutes}:${seconds}`
  }

  updateTimer() // Initial call to display the timer immediately
  setInterval(updateTimer, 1000) // Update every second
}

window.onload = startTimer
