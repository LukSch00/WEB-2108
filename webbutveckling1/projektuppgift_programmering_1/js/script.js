let myCart = []


function itemsInCart(artist) {
    for (const album of myCart) {
        if (album.artist === artist) {
            return true;
        }
    }
    return false
}
_____________________________________ börja här imon
function quantity(artist) {
    for (const items of myCart) {
        if (items.artist === artist) {
            items.quantity += 1
        }
    }
}

function pushItemToCart(artist) {
    myCart.push({artist: artist,
        quantity: 1})
}

function cartEmpty() {
    return myCart.length === 0
}

function addItemToCart(artist) {
    if (cartEmpty()) {
        pushItemToCart(artist);
    }
    else { if (itemsInCart(artist)) {
        quantity(artist)
    } else {
        pushItemToCart(artist)
    }
    }
    console.log(myCart)
    alwaysRunOnChange()
}

function makeButtonListener(make) {
    document.getElementById(make)
        .addEventListener('click', function () {
            addItemToCart(make)
        });
}

window.addEventListener('load', function () {
    for (const car of data) {
        makeButtonListener(car.make)
    }
})
