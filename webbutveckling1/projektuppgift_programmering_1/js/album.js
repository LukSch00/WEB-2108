function generateAlbums(album) {
    return `
    <article class="albums">
        <h4>${ album.artist }</h4>
        <p>Price ${ album.price }</p>
        <button onclick="" id="${ album.artist }">Add to Cart</button>
    </article>
    `
}

function ElementHtmlText(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

function htmlContent(){
    let htmlElement = ''
    for (const album of id) {
        htmlElement += generateAlbums(album)
    }

    ElementHtmlText('album_cards', htmlElement)
}

htmlContent()