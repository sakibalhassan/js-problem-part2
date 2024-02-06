
const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function lawestNumber(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number.length < min.length) {
            min = number;
        }
    }
    return min;
}


const min = lawestNumber(heights);
console.log('the lawest number is:', min);