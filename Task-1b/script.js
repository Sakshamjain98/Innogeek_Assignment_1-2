const box = document.querySelector('.box');
const ball = document.getElementById('ball');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let ballX = 200;
let ballY = 150;
let ballSpeedX = 5;
let ballSpeedY = 5;
let ballRadius = 20;
let intervalId;

function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Bounce the ball off the walls
  if (ballX + ballRadius >= 400 || ballX - ballRadius <= 0) {
    ballSpeedX *= -1;
  }
  if (ballY + ballRadius >= 300 || ballY - ballRadius <= 0) {
    ballSpeedY *= -1;
  }

  // Update ball position
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
}

// Start button event listener
startBtn.addEventListener('click', function() {
  intervalId = setInterval(updateBallPosition, 30);
});

// Stop button event listener
stopBtn.addEventListener('click', function() {
  clearInterval(intervalId);
});

// Reset button event listener
resetBtn.addEventListener('click', function() {
  clearInterval(intervalId);
  ballX = 200;
  ballY = 150;
  ballRadius = 20;
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
});
