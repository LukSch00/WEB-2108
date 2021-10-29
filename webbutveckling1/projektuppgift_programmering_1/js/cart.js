function cartContent(cart) {
    return `
    <article class="cart_container">
        <h4>${ cart.artist }</h4>
        <p>price ${ cart.price }</p>
        <p>Quantity ${ cart.quantity }</p>
    </article>
    `
}

function generateCartItem() {
    let htmlElement = ''
    for (const items of myCart) {
        htmlElement += cartContent(items)
    }
    ElementHtmlText('cart-content', htmlElement)
}

function alwaysRunOnChange() {
    console.log('alwaysRunOnChange')
    generateCartItem()
}





function openMenuAndClose() {
    let cart = document.getElementById("cart-content");
    if (cart.style.display === "none") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}

