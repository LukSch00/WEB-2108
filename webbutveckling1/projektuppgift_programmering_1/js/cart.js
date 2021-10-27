function cartContent(cart) {
    return `
    <article class="cart_container">
        <h4>${ cart.artist }</h4>
        <p>Price ${ cart.price }</p>
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