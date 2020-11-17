const countBs = (str) => {
    return countChar(str, 'B')
}

const countChar = (str, char) => {
    let count = 0
    for (const c of str) {
        if (c === char) {
            count++
        }
    }
    return count
}

console.log(countBs('BBC'))
console.log(countChar("kakkerlak", "k"));
