// Switch Statment  Question 1)
let num =  Math.floor(Math.random()*5)+1;
switch (num) {
    case 0:
        console.log("The first recorded zero appeared in Mesopotamia around 3 B.C")
        break;
    case 1:
        console.log("The ancient Greeks did not consider One to be a number at all. A number, said Euclid, is an “aggregate of units”, so numbers began at Two. ")
        break;
    case 2:
        console.log("It is an interesting fact.")
        break;
    case 3:
        console.log('We live on 3rd planet from sun.')

    default:
        console.log("larger than 4.")
        break;
} 

// Switch Statment  Question 2)
let hb =  new Date().getMonth();
switch (hb) {
    case 0:
      month = 'January';
      break;    
    case 1:
      month = 'February';
      break;    
    case 2:
      month = 'March';
      break;    
    case 3:
      month = 'April';
      break;    
    case 4:
      month = 'May';
      break;    
    case 5:
      month = 'June';
      break;    
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = 'December';
      break;    
    default:
      month = "That's not a real month.";
  }
  console.log(`My birthday is in ${month}`)

//   Ternary Operators Question 1) 
let person = {
    name: 'tony',
    age: 20,
    driver: null
    };    

person.driver =  person.age >= 16 ? 'Yes' :  'No';
console.log(person)

//   Ternary Operators Question 2) 
var age = 7;
var kindergarten_eligible;

kindergarten_eligible = age > 5 ? "Old enough" : "Too young";


