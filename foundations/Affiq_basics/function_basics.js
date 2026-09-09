function add7(number) {
    return number + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(word) {
    if (!word) return ""; //Guard against empty strings
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function lastLetter(word) {
    let lastCharPosition = word.length - 1;
    return word.charAt(lastCharPosition);
}

//Outputs
console.log(add7(7));

console.log(multiply(7, 2));

console.log(capitalize("animal"));

console.log(lastLetter("What is the last letter?"));