function renderDrinks(){
    let contentRefDrinks = document.getElementById("drinks");
    contentRefDrinks.innerHTML = "";

    for (let indexDrinks = 0; indexDrinks < drinks.length; indexDrinks++) {
        contentRefDrinks.innerHTML += getDrinksTemplate(indexDrinks);
        
    }
}


function addDrinksToBasket(indexDrinks) {
    let addName = drinks[indexDrinks].name;
    let addPrice = drinks[indexDrinks].price;

    let existingIndex = basket.findIndex(item => item.name === addName);

    if (existingIndex !== -1) {
        basket[existingIndex].amount++;
    } else {
        basket.push({
            "name": addName,
            "price": addPrice,
            "amount": 1
        });
    }

    renderSum();
}