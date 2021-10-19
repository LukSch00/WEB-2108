function nameChange() {
    document.getElementById('findName').innerText = 'Lulle'
}

function nameChangeButton() {
    let nameChanger = document.getElementById('name-change').value
    console.log('nameChangeButton', nameChanger)
    document.getElementById('hello-name').innerText = nameChanger
}


