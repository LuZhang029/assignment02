let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
if (isNaN(num1) || isNaN(num2)) {
    document.body.innerHTML = "Please enter valid integers.";
} else if (num1 > num2) {
    document.body.innerHTML = `The larger number is: ${num1}`;
} else if (num2 > num1) {
    document.body.innerHTML = `The larger number is: ${num2}`;
} else {
    document.body.innerHTML = "Both numbers are equal.";
}
