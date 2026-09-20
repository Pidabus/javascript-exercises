const palindromes = function (str) {
    let noPunct = str.toLowerCase().split(" ").join("").split("");
    if (noPunct.includes("!")) {
        noPunct = noPunct.filter((char) => char != "!");
    }
    if (noPunct.includes(".")) {
        noPunct = noPunct.filter((char) => char != ".");
    }
    if (noPunct.includes(",")) {
        noPunct = noPunct.filter((char) => char != ",");
    }

    // The forward array is simplified for comparison.
    let arrForward = noPunct;
    let arrReverse = noPunct.toReversed();
    // console.log(arrForward);
    // console.log(arrForward);

    if (arrForward.join("") == arrReverse.join("")) return true;
    else return false;
};


const result = palindromes('uzuuuuuuuu');
console.log(result);

// array = [""]
// array.splice(size, 0, ".")
