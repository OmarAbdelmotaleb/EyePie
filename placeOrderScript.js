//Javascript by Roland Tumbokon


orders = document.getElementsByClassName("OrderItem")

function opacity0() {
    console.log(orders[i])
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