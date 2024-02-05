const mobiles = [
    { name: 'samsung', price: 20000, cemera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, cemera: '12mp', color: 'black' },
    { name: 'opp', price: 30000, cemera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, cemera: '12mp', color: 'black' },
    { name: 'realme', price: 15000, cemera: '12mp', color: 'black' }
]

function maxPhone(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

const max = maxPhone(mobiles);
console.log('high budget phone is:', max)