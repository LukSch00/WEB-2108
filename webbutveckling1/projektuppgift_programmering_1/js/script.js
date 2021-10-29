let myCart = []


function itemsInCart(artist) {
    for (const album of myCart) {
        if (album.artist === artist) {
            return true;
        }
    }
    return false
}

function quantity(artist) {
    for (const items of myCart) {
        if (items.artist === artist) {
            items.quantity += 1
        }
    }
}

function pushItemToCart(artist) {
    myCart.push({
        artist: artist,
        quantity: 1
    });
}

function cartEmpty() {
    return myCart.length === 0
}

function addItemToCart(artist) {
    if (cartEmpty()) {
        pushItemToCart(artist);
    }
    else { if (itemsInCart(artist)) {
        quantity(artist);
    } else {
        pushItemToCart(artist);
    }
    }
    console.log(myCart)
    alwaysRunOnChange()
}

function makeButtonListener(artist) {
    document.getElementById(artist)
        .addEventListener('click', function () {
            addItemToCart(artist)
        });
}

window.addEventListener('load', function () {
    for (const items of id) {
        makeButtonListener(items.artist)
    }
})


