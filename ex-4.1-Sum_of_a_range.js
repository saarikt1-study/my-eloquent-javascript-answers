const range = (start, end, step = 1) => {
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
console.log(range(5, 2, -1))

const sum = (arrayOfNumbers) => {
    let sum = 0
    for (let i in arrayOfNumbers) {
        sum += parseInt(arrayOfNumbers[i])
    }

    return sum
}

console.log(sum(range(1, 10)))
