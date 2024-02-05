const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    // console.log(numbers);
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}


const max = getMax(heights);
console.log('max value is:', max)
