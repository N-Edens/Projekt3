function resetAnimation() {
  var cars = document.querySelectorAll(".car");

  cars.forEach(function(car) {
    car.style.animation = "";
    car.style.animationPlayState = "paused";
    car.style.transform = "";
    car.style.left = "";
  });

  // Remove active class from both start and stop buttons
  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");

  startBtn.disabled = false;
}
