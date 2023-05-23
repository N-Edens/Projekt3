function stopAnimation() {
    var cars = document.querySelectorAll(".car");

    cars.forEach(function(car) {
      car.style.animationPlayState = "paused";
    });

    clearInterval(animationInterval);

    // Change the styles of the buttons
    startBtn.classList.remove("active");
    stopBtn.classList.add("active");
    startBtn.disabled = false;
  }

  function removeOffscreenCars() {
    var cars = document.querySelectorAll(".car");

    cars.forEach(function(car) {
      var rect = car.getBoundingClientRect();
      if (rect.left > window.innerWidth) {
        car.remove();
      }
    });

    if (document.querySelectorAll(".car").length === 0) {
      startBtn.classList.remove("active");
      startBtn.disabled = false;
      clearInterval(animationInterval);

      // Reset animation for new set of cars
      createCars();
    }
  }     
  
  document.getElementById("stopBtn").addEventListener("click", stopAnimation);