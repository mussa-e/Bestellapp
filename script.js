let food = [
    {
        "name" : "Pizza Margeritha",
        "description" : "mit Käse und Tomatensauce",
        "price" : 8.99
    },

    {
        "name" : "Pizza Funghi",
        "description" : "mit frischen Champinogs",
        "price" : 9.99
    },

    {
        "name" : "Pizza Tonno",
        "description" : "mir Thunfisch und Zwiebeln",
        "price" : 10.99
    },

    {
        "name" : "Pizza Quattro Formaggi",
        "description" : "mit vier verschiedenen Käsesorten",
        "price" : 10.99
    }
];

function renderMainDish(){
    let contentRef = document.getElementById("main");
    contentRef.innerHTML = "";

    for (let indexMain = 0; indexMain < food.length; indexMain++) {
        contentRef.innerHTML += getFoodTemplate(indexMain);
    }
}

function getFoodTemplate(indexMain){
    return `
            <div>
            <div>${food[indexMain].name}</div>
            <div>${food[indexMain].description}</div>
            <div>${food[indexMain].price}</div>
            </div>
    
    `
}



// function renderSides(){

// }

// function renderDrinks(){

// }