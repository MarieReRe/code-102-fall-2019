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
var age = 27;
function day1AM() {
// console.log("hello world")
var fullName = "Marie Antons";

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

print("Hello World");
var convertedTemp = f2c(0);

print (convertedTemp);
}
//day1AM();
//day1PM();
function day1PM(){    
    var convertedTemp = f2c(0);
    print (convertedTemp);  
    print(canIGoToTheCasino(age, "IA"))
    age = 19;
    print(canIGoToTheCasino (age, "MN"))
    print(canIGoToTheCasino (age, "IA"))
    
    print(whatShouldIWear (75))
    print(whatShouldIWear(1))
}

function print(input){
    console.log(input);
}
 //Converts Fahrenheit to Celsius
    //Input: Temperature in Fahrenheit 
function f2c (t){
    return ((t-32) *5/9);
   
   }

   function canIGoToTheCasino (age, location){
    return age >=21 && location == "IA" || age >= 18 && location == "MN"

   



}
function canISleepIn(day, personalDay, holiday){
    //assume normal 8-5 job
    //return true if the day is Saturday or Sunday
    //return true if on holiday

}
function whatShouldIWear(temp){
    if(temp >= 75){
        return "swim wear";
    } else if (temp >= 45) { 
        return "jacket or hoodie";
    } else if (temp >= 10) {
        return "winter jacket";
    } else {
        return "don't go outside";
    }
}


function day2AM(){
    console.log(1);
    print(2);
    print(3);
    var count = 1; 
    while(count <= 100){
      print(count);
      count++
    }

// var sum = 0;
// count = 0; 
// while(true){
//     var input = parseInt (prompt('Enter a number. Type 0 to end'));
//     if(input ===0)
//     {
//         break;
//     }
//      else{
//         sum += input; 
//         count++;
//     }
// }
// console.log('The average of your numbers is' + sum/count);

for(var count = 1; count <= 1; count++){
    print(count);
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
print(months[5]);
for(var i =0; i < months.length; i++ ){
print(months[i])
}
var states = [['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
];

states.forEach (function(state){
    print(state);
});
}


day2AM();
