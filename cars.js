function createCars() {
    for (var lane = 1; lane <= 6; lane++) {
      for (var i = 0; i < (lane === 6 ? 14 : 53); i++) {
        var svg = createCarElement(lane, i);
        document.getElementById("road").appendChild(svg);
      }
    }
  }
  
  function createCarElement(lane, index) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 50");
    svg.setAttribute("height", "50px");
    svg.setAttribute("width", "100px");
    svg.setAttribute("class", "car");
  
    // create car elements
    var rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1.setAttribute("x", "10");
    rect1.setAttribute("y", "20");
    rect1.setAttribute("width", "50");
    rect1.setAttribute("height", "10");
    svg.appendChild(rect1);
  
    var rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect2.setAttribute("x", "15");
    rect2.setAttribute("y", "10");
    rect2.setAttribute("width", "40");
    rect2.setAttribute("height", "10");
    svg.appendChild(rect2);
  
    var wheel1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    wheel1.setAttribute("cx", "20");
    wheel1.setAttribute("cy", "30");
    wheel1.setAttribute("r", "5");
    wheel1.setAttribute("class", "wheel");
    svg.appendChild(wheel1);
  
    var wheel2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    wheel2.setAttribute("cx", "53");
    wheel2.setAttribute("cy", "30");
    wheel2.setAttribute("r", "5");
    wheel2.setAttribute("class", "wheel");
    svg.appendChild(wheel2);
  
    // set class and position based on lane
    if (lane === 1) {
      // Lane 1
      svg.setAttribute("class", "car lane1");
      svg.style.left = (-300 - index * 75) + "px";
    } else if (lane === 2) {
      // Lane 2
      svg.setAttribute("class", "car lane2");
      svg.style.left = (-305 - index * 75) + "px";
    } else if (lane === 3) {
      // Lane 3
      svg.setAttribute("class", "car lane3");
      svg.style.left = (-310 - index * 75) + "px";
    } else if (lane === 4) {
      // Lane 4
      svg.setAttribute("class", "car lane4");
      svg.style.left = (-315 - index * 75) + "px";
    } else if (lane === 5) {
      // Lane 5
      svg.setAttribute("class", "car lane5");
      svg.style.left = (-320 - index * 75) + "px";
    } else if (lane === 6) {
      // Lane 6
      svg.setAttribute("class", "car lane6");
      svg.style.left = (-325 - index * 303.75) + "px";
      if (index % 2 === 0) {
        svg.style.transform = "translateY      (-10px)";
    }
}

return svg;
}

// Call the createCars function to generate the initial set of cars
createCars();
  