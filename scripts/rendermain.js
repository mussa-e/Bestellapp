function renderMain(){
    let contentRef = document.getElementById("main");
    contentRef.innerHTML = "";
    for (let indexMain = 0; indexMain < food.length; indexMain++) {
        contentRef.innerHTML += getFoodTemplate(indexMain);
    }


    let contentRefSides = document.getElementById("sides");
    contentRefSides.innerHTML = "";
    for (let indexSides = 0; indexSides < sides.length; indexSides++) {
        contentRefSides.innerHTML += getSidesTemplate(indexSides);
    }


    let contentRefDrinks = document.getElementById("drinks");
    contentRefDrinks.innerHTML = "";
    for (let indexDrinks = 0; indexDrinks < drinks.length; indexDrinks++) {
        contentRefDrinks.innerHTML += getDrinksTemplate(indexDrinks);
    }

}


function addToBasket(index, sourceArray) {
    let addName = sourceArray[index].name;
    let addPrice = sourceArray[index].price;

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
