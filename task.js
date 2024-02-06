
// Find the lowest number in the array below.

// const heights2 = [167, 190, 120, 165, 137];

// function lawestNumber(numbers) {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }


// const min = lawestNumber(heights2);
// console.log('the lawest number is:', min);


// Find the friend with the smallest name.
// const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];



// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'sh'];

function getMinString(str) {
    let min = str[0];
    for (const num of str) {
        if (num.length < min.length) {
            min = num;
        }
    }
    return min;
}

const min = getMinString(heights2);
console.log('the min string is:', min)


