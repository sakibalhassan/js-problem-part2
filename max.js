const shakib = 75;
const mushfiq = 15;

if (shakib > mushfiq) {
    console.log('shakib eat strobewry');
}
else {
    console.log('mushfiq eat strobary');
}

function maxGetNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

const output = maxGetNumber(78, 90);
console.log('max of two is:', output)