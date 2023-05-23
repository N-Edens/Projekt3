var animationInterval;
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");

function startAnimation() {
  var cars = document.querySelectorAll(".car");

  cars.forEach(function(car) {
    car.style.animation = "move 15s linear";
    car.style.animationPlayState = "running";
  });

  // Remove active class from stop button
  stopBtn.classList.remove("active");

  // Add active class to start button
  startBtn.classList.add("active");
  startBtn.disabled = true;

  animationInterval = setInterval(removeOffscreenCars, 10);
}
document.getElementById("startBtn").addEventListener("click", startAnimation);