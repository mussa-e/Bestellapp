function renderSides(){
    let contentRefSides = document.getElementById("sides");
    contentRefSides.innerHTML = "";

    for (let indexSides = 0; indexSides < sides.length; indexSides++) {
        contentRefSides.innerHTML += getSidesTemplate(indexSides);
        
    }
}


function addSidesToBasket(indexSides) {
    let addName = sides[indexSides].name;
    let addPrice = sides[indexSides].price;

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