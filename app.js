function setup() {
createCanvas (640, 480);

}
function draw() {

fill (0,255,0);
rect (320, 240, 20, 20); // draws a rectangle at x,y (320,240) with size w,h (20,20)

stroke (0,0,255);
strokeWeight(3)
line (0,40,640,40); // draws line starting at x,y (0,40) ending at x,y (640,40)

noStroke();
fill (255, 0,0);
circle(500,100,20);
}

function day1AM() {
// console.log("hello world")
var fullName = "Marie Antons";
var age = 27;
var weight = 190;
var heightInInches = 69;
var address = "1120 Depot Ln SE";
var middleName = "Ann";

age = 28;
console.log(age);
age = age + 1;
console.log(age);

console.log(fullName + " is " + age + " years old ");
var feet =  Math.floor(heightInInches / 12);
var inches = heightInInches % 12; 

console.log(fullName+" is "+feet+" foot " +inches+ " inches tall")



}
day1AM();
