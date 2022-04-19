

/*********** Question 1: FIZZ BUZZ ************/


// Write a for loop that iterates integers from 1 to 100
for (let i = 0; i <= 100; i++) { 

    

    /*
    if conditional statement for multiple of 3 and 5
    console.log number and "FizzBuzz"
    
    */ 
    if ( i%3 === 0 && i%5 === 0 )
    {
      console.log( i + " FizzBuzz" );
    }

    /*
    else if conditional statement for multiple of 3 only
    console.log the number and 'Fizz'
    */ 
    else if ( i%3 === 0 ) 
    {
      console.log(i+ " Fizz" );
    }



    /*
    else if conditional statement for multiple of 5 only
    console.log the number and 'Buzz'
    
    */ 
    else if ( i%5 === 0 ) 
    {
      console.log(i+ " Buzz" );
    }



    /*
    else statement to print remaining numbers
    */ 
    else
    {
      console.log(i);
    }

}

/*********** Question 2: THE EVEN/ODD REPORTER ************/
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


for (let i = 0; i <= 20; i++) {
    if (i%2==0){
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
    
}


/*********** Question 3: MULTIPLICATION TABLE ************/
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (let i = 0; i <= 10; i++) {
    console.log(i * 9)
    
} 

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

let total ;
for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
        total = row * col;
        console.log(total)   
    }
}


/*********** Question 4: THE GRADE ASSIGNER ************/
// Check the results of your assignGrade function by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.


function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(assignGrade(50))
console.log(assignGrade(66))
console.log(assignGrade(76))
console.log(assignGrade(88))
console.log(assignGrade(89))
console.log(assignGrade(90))
console.log(assignGrade(91))
console.log(assignGrade(100))

 

/*********** Question 5 ************/
/*


Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * *  


*/ 


let row = 5; 
let pattern = "";

for (let i = 1; i <= row; i++) {
  
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern); 




/*********** Question 6 ************/
// Sum the multiples of 3 and 5 under 1000

let sum = 0;
for(let i=1; i<1000; i++) {
    if(i % 3 === 0 || i % 5 === 0){
        sum += i;
    }
}