// Example: http://p5js.org?year=2014&month=May&day=15

function setup() {
  let params = getURLParams();
  print(params);
  print(Object.keys(params).length)
  createCanvas(600, 600);
  
  if (Object.keys(params).length > 0) {
    text(params.day, 10, 20);
    text(params.month, 10, 40);
    text(params.year, 10, 60);
  } else {
    text("no params were passed", 10, 10);
  }
}