function ship(length) {

    const shipLen = length;
    let numHits = 0;
    let sunkStatus = false;

    const hit = () => {
        numHits++;
        return numHits
    };

    const isSunk = () => {
        sunkStatus = numHits === shipLen
        return sunkStatus
    }

    return {hit, isSunk}
}

module.exports = { ship };
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;

// module.exports = { add, subtract, divide, multiply };