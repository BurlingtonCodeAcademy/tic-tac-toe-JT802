let startButton = document.getElementById('start')
let status = document.getElementById('status')

startButton.addEventListener('click', function() {
    event.target.disabled = true;
    event.target.textContent = "Player X's turn"

})