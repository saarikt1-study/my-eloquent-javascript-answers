option1 = (size) => {
    size = size;
    let oddRow = '';
    let evenRow = '';
    let output = '';

    while (oddRow.length < size) {
        if (oddRow.length % 2 === 0) {
            oddRow += ' '
            evenRow += '#'
        } else {
            oddRow += '#'
            evenRow += ' '
        }
    }

    oddRow += '\n'
    evenRow += '\n'

    for (let i = 1; i <= size; i++) {
        if (i % 2 === 1) {
            output += oddRow;
        } else {
            output += evenRow;
        }
    }

    console.log(output);
}

option2 = (size) => {
    let i;
    let j;
    let output = '';
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                output += ' '
            } else {
                output += '#'
            }
        }
        output += '\n';
    }
    console.log(output);
}

option2(8);
