var carAnimation = document.querySelector('.car').style.animation;

document.querySelector('#start-button').addEventListener('click', function() {
  document.querySelectorAll('.car').forEach(function(car) {
    car.style.animation = carAnimation;
  });
});

document.querySelector('#stop-button').addEventListener('click', function() {
  document.querySelectorAll('.car').forEach(function(car) {
    car.style.animation = 'none';
  });
});