// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk

function gadgetShopping(laptopQuantity, tabletQuantity, mobileQuantity) {
    const perLaptopPrice = 35000;
    const perTabletPrice = 15000;
    const perMobilePrice = 20000;

    const laptopTotalPrice = perLaptopPrice * laptopQuantity;
    const tabletTotalPrice = perTabletPrice * tabletQuantity;
    const mobileTotalPrice = perMobilePrice * mobileQuantity;

    const totalPrice = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return totalPrice;
}

const total = gadgetShopping(2, 4, 5);
console.log('the total amount is:', total);