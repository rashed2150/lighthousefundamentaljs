function calculateRectangleArea(length, width){
  if(length <= 0 || width <= 0){
    return "Undefined"
  }else{
    return length * width
  }
  
}
console.log(calculateRectangleArea(8,5))

function calculateTriangleArea(base, height){
  if(base <= 0 || height <= 0) {
    return "Undefined"
  }else {
    return base * height / 2
  }
}
console.log(calculateTriangleArea(8,5))

function calculateCircleArea(radius) {
  if( radius <= 0) {
    return "Undefined"
  }else{ 
    return Math.PI * radius * radius
  }
}
console.log(Math.floor(calculateCircleArea(4)))