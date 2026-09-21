const findTheOldest = function (people) {

    let max = 0;
    for (let person of people) {
        if (person.yearOfDeath === undefined) {
            const customDeath = new Date();
            person.yearOfDeath = customDeath.getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth; 
        if ((age) > max) {
            max = (age);
        };
    };

    for (let person of people) {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age === max) return person;
    };
};

// Do not edit below this line
module.exports = findTheOldest;
