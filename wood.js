// function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairTotalWood = chairQuantity * perChairWood;
//     const tableTotalWood = tableQuantity * perTableWood;
//     const bedTotalWood = bedQuantity * perBedWood;

//     const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
//     return totalWood;
// }

// const wood = woodQuantity(5, 7, 1);
// console.log(wood);

/**
 * shirt price=500
 * pant price=300
 * shoe price=900
 */


function myShopping(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const totalShirt = perShirtPrice * shirtQuantity;
    const totalPant = perPantPrice * pantQuantity;
    const totalShoe = perShoePrice * shoeQuantity;
    const total = totalShirt + totalPant + totalShoe;
    return total;
}

const shopping = myShopping(2, 10, 6);
console.log(shopping);