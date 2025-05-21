function renderSides(){
    let contentRefSides = document.getElementById("sides");
    contentRefSides.innerHTML = "";

    for (let indexSides = 0; indexSides < sides.length; indexSides++) {
        contentRefSides.innerHTML += getSidesTemplate(indexSides);
        
    }
}


function getSidesTemplate(indexSides){
    return  `
    
    <div class="food-temp">
                <div class="food-temp-head">
                    <div class="food-temp-name">${sides[indexSides].name}</div>
                    <button onclick="addSidesToBasket(${indexSides})" class="button-plus"><i class="fa-solid fa-plus"></i></button>
                </div>

                <div class="food-temp-desc">${sides[indexSides].description}</div>
                <div class="food-temp-price">${sides[indexSides].price.toFixed(2).replace("." ,",")}€</div>
            </div>
    
    `
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

    renderBasket();
    renderSubtotal();
    renderTotal();
    emptyCheck();
}