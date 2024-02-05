function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    const total = num1 - num2;
    return total;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    return num1 / num2;
}


function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'substract') {
        const result = substract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'devide') {
        return devide(a, b);
    }
    else {
        return "only 'add','subtract','multiply','devide',operation is allewed"
    }
}

const result = calculator(5, 7, 'add');
console.log(result);