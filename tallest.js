const heights = [30, 87, 90, 56, 78, 98, 56, 45, 32, 45, 67, 89, 97, 65, 43, 22];


function getMaxNumber(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMaxNumber(heights);
console.log('the tallest number is:', max)