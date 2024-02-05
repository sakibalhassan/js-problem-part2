
const numbers = [300, 100, 700, 400];

const products = [
    { name: 'shampo', price: 300 },
    { name: 'chironi', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'pant', price: 1200 }
]


function getShoppingProducts(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}

const total = getShoppingProducts(products);
console.log('total cost is:', total);