const reverseArray = (array) => {
    reversedArray = []
    arrayLength = array.length
    for (let i = 0; i < arrayLength; i++) {
        reversedArray.push(array.pop())
    }
    return reversedArray
}

console.log(reverseArray(["A", "B", "C"]));

const reverseArrayInPlace = (array) => {
    let arrayLength = array.length
    for (let i = 0; i < arrayLength; i++) {
        array.splice(i, 0, array.pop())
    }
    return array
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
