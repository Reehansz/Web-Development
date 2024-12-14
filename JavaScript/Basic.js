var myName = "ABC";
console.log(myName);
console.log("Number of characters is : " + myName.length);

function bmiCalculator(weight, height){
    var bmi = weight / (height**2);
    return Math.round(bmi);
}

console.log(bmiCalculator(80,1.76));