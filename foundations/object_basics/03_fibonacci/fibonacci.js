let arr = [0, 1];
for (i = 2; i <= 25; i ++) {
    let newElem = arr[i-1] + arr[i-2];
    arr.push(newElem);
}

// console.log(arr[25]); --> Verified the array correctly made a fibonacci sequence up to the 25th element.

const fibonacci = function(num) {

};

// Do not edit below this line
module.exports = fibonacci;
