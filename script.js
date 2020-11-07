var fortunestold = ["a lifetime friend is coming your way.",
  "splurge on that gift, it will bring more than it seems.",
  "take the day step by step, worry about the future tomorrow.",
  "dwelling on that does not do anyone any good.",
  "use your energy sparingly, think of what is important.",
  "stop doubting yourself, take that first step."];

var coloring = ["#f2a6f1", "#96bced", "#edc196",
  "#a6e7aa", "#cda6e7"];

var capping = ["uppercase", "lowercase", "capitalize"];

var sizing = ["0.7rem", "1.25rem", "1.5rem", "1.75rem", "2rem"];

var weighing = [300, 400, 500, 600, 700, 800, 900];

halfButton.addEventListener("click", halfNumber);

fortuneButton.addEventListener("click", fortune);

function halfNumber (){
  var halfContents = document.getElementById("halfInput").value;
  var halfTotal = halfContents / 2;
  alert("Your magical number is " + halfTotal);
  console.log(halfContents);
}

function fortune () {
  var nameB = document.getElementById("fortuneInput").value;
  var fortuneH = fortunestold[Math.floor(Math.random() * fortunestold.length)];
  fortuneOutput.innerHTML = nameB + ", " + fortuneH;
  restyle();
  // var colors = coloring[Math.floor(Math.random() * coloring.length)];
  // fortuneOutput.style.color = colors;
  // var caps = capping[Math.floor(Math.random() * capping.length)];
  // fortuneOutput.style.textTransform = caps;
  // var sizez = sizing[Math.floor(Math.random() * sizing.length)];
  // fortuneOutput.style.fontSize = sizez;
  // var weighs = weighing[Math.floor(Math.random() * weighing.length)];
  // fortuneOutput.style.fontWeight = weighs;
}

function restyle (){
  var colors = coloring[Math.floor(Math.random() * coloring.length)];
  fortuneOutput.style.color = colors;
  var caps = capping[Math.floor(Math.random() * capping.length)];
  fortuneOutput.style.textTransform = caps;
  var sizez = sizing[Math.floor(Math.random() * sizing.length)];
  fortuneOutput.style.fontSize = sizez;
  var weighs = weighing[Math.floor(Math.random() * weighing.length)];
  fortuneOutput.style.fontWeight = weighs;
}


// pink #f2a6f1; blue #96bced;
// orange #edc196; green #a6e7aa
// purple #cda6e7
