const range = (start, end, step = start < end ? 1 : -1) => {
    let array = []
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            array.push(i)
        }
    } else {
        for (let i = start; i <= end; i += step) {
            array.push(i)
        }
    }
    return array
}

console.log(range(1, 10, 2))
console.log(range(5, 2, -2))
console.log(range(5, 2))

function sum(arrayOfNumbers) {
    let sum = 0;
    for (let number of arrayOfNumbers) {
        sum += number;
    }
    return sum;
}

console.log(sum(range(1, 10)))
