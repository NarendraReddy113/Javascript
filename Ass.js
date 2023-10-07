let opertor = '1';
    let number1 = 10, number2 = 2;
    switch (opertor)
    {
        case '+':
            console.log("Addition of two numbers is: " + (number1 + number2));
            break;
        case '-':
            console.log("Subtraction of two numbers is: " + (number1 - number2));
            break;           
        case '*':
            console.log("Multiplication of two numbers is: " + (number1 * number2));
            break;
        case '/':
            console.log("Division of two numbers is: " + (number1 / number2));
            break;
        case '%':
            console.log("Module of two numbers is: " + (number1 % number2));
            break;
        default:
            console.log("You have entered Wrong operator");
    }


// program to check if the number is even or odd
// take input from the user
let number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even or boys.");
}

// if the number is odd
else {
    console.log("The number is odd or girls.");
}