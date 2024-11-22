https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  const { radius } = circle;
  return +(2 * Math.PI * radius).toFixed(6);
};
