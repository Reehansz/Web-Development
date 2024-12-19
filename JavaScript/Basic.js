//Strings and functions
var myName = "ABC";
console.log(myName);
console.log("Number of characters is : " + myName.length);

//slicing 
var string1 = "Reehan";
//slice(starting index, ending index+1) number of charters (end-start) 

console.log(string1.slice(0,1));

var upperStr = string1.toUpperCase();
var lowerStr = string1.toLowerCase();
console.log(upperStr + " " + lowerStr);

//given a name print the first char upper than all other to lower

var givenName = "reeHaN";
var firstChar = givenName.slice(0,1);
firstChar = firstChar.toUpperCase();
var remChars = givenName.slice(1,givenName.length);
remChars = remChars.toLowerCase();
var givenName = firstChar + remChars;
console.log("Hello master, " + givenName);

//BMI calculator
function bmiCalculator(weight, height){
    var bmi = weight / (height**2);
    return Math.round(bmi);
}

function bmiCalculator1(weight, height) {
    bmi = weight / (height ** 2);
    bmi = Math.round(bmi*100)/100;
    var interpretation;
    if (bmi< 18.5) {
        interpretation = "Your BMI is "+bmi+", so you are underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9){
       interpretation = "Your BMI is "+bmi+", so you have a normal weight";
        
    }
    if(bmi > 24.9){
        interpretation = "Your BMI is "+bmi+", so you are overweight";
    return interpretation;
    }
}

console.log(bmiCalculator1(80,1.76));
// Dog age calculator
function dogAgeCalculator(age){
    dogAge = (age-2) * 4 + 22;
    return dogAge;
}
var ageDog = 2;
console.log("A dog which is "+ageDog+" years old is "+dogAgeCalculator(ageDog)+" human old");

// Leap year rules
// if divide by 4, check for divisibility by 100, if not than leap year than if it is check for divisibility by 400 if divisible than leap if not than not a leap year
// if not divisible by 4 than directly it is not a leap year
function isLeapYear(year){
    if(year%4 == 0){
        if(year%100==0){
            if(year%400 == 0){
                console.log("The year "+year+" is a leap year as it is divisible by 4, 100 and finally 400");
            }
            else{
                console.log("The year "+year+" is not a leap year as it is divisible by 4 and with 100 but not with 400");
            }
        }
        else{
            console.log("The year "+year+" is a leap year as it is divisible by 4 and not with 100");
        }
    }
    else{
        console.log("The year "+year+" is not a leap year as it is not divisible by 4");
    }
}

var year = 2000;
isLeapYear(year);

//Buying lunch from a given list of names
function whosPaying(names) {
        var ind = Math.floor(Math.random()*10) % names.length; //we can also directly multiply the random() with the size of the array to get the random number
        return names[ind] + " is going to buy lunch today!";
}

var names = ["A", "B", "C", "D", "E"];
var whosPaying = whosPaying(names);
console.log(whosPaying);

//fibonacci numbers
function fibonacciGenerator (n) {
    var fibonacci = [0, 1];
    if (n<=0){
        return 0;
    }
    if (n==1){
        return fibonacci[0];
    }
    else if (n==2) {
        return fibonacci.slice(0,2);
    }
    else{
        for (var i=2; i<n; i++) {
            fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
        }
    }
    return fibonacci
}
    
var num = 700;
var fibo = fibonacciGenerator(num);
console.log(fibo)