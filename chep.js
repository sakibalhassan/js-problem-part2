const mobiles = [
    { name: 'samsung', price: 20000, cemera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, cemera: '12mp', color: 'black' },
    { name: 'opp', price: 30000, cemera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, cemera: '12mp', color: 'black' },
    { name: 'realme', price: 15000, cemera: '12mp', color: 'black' }
]

function cheapestPhone(phones) {
    let cheap = phones[0];
    for (const phone of phones) {
        if (phone['price'] < cheap['price']) {
            cheap = phone;
        }
    }
    return cheap;
}

const cheap = cheapestPhone(mobiles);
console.log(cheap);