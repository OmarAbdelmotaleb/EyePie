//Button resizing by Roland Tumbokon


orders = document.getElementsByClassName("OrderItem");

function opacity0() {
    //console.log(orders[i])
    orders[i].style.color = "green"
}

var big = function() {
    this.style.transform = "scale(1.0)"
}

var small = function() {
    this.style.transform = "scale(1.1)"
}

for (var i = 0; i < orders.length; i++) {
    orders[i].addEventListener("mouseover", small)
    orders[i].addEventListener("mouseleave", big)
}

//One more button David Treder
document.getElementById("OrderButton").addEventListener("mouseover", small);
document.getElementById("OrderButton").addEventListener("mouseleave", big);
document.getElementById("ClearButton").addEventListener("mouseover", small);
document.getElementById("ClearButton").addEventListener("mouseleave", big);

//Order script David Treder

const prices = {
    cheesepizza: 800,
    pepperonipizza: 1000,
    vegetablepizza: 1000,
    whitepizza: 1200,
    meatypizza: 1500,
    saladpizza: 1200,

    caesarsalad: 500,
    housesalad: 400,
    chickensalad: 600,
    pizzasalad: 1200,

    breadsticks: 500,
    garlicknots: 200,
    mozzarellasticks: 600,
    jalapenopoppers: 500
};

var cart = [];
var cartUSERDISPLAY = [];

for (var i = 0; i < orders.length; i++) {
    orders[i].addEventListener("click", addItem);
}

function addItem() {
    cart.push(this.id);
    cartUSERDISPLAY.push(this.textContent);
    //console.log(cart);
    //console.log(cartUSERDISPLAY);
}

document.getElementById("OrderButton").addEventListener("click", placeOrder);

function placeOrder() {
    var totalPrice = 0;
    var outputString = "You are ordering the following items:\n"
    for (var i = 0; i < cart.length; i++) {
        totalPrice += prices[cart[i]];

    }
    for (var i = 0; i < cartUSERDISPLAY.length; i++) {
        outputString += cartUSERDISPLAY[i] + "\n";
    }
    outputString += "For a total of $" + (totalPrice / 100);

    alert(outputString);
}

document.getElementById("ClearButton").addEventListener("click", clearOrder);

function clearOrder() {
    cart = [];
    cartUSERDISPLAY = [];
    alert("CART CLEARED")
}