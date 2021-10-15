const maxNum = 10 //hur lågt och högt numret får vara högst

function generateRandomNumber(maxNumber) {
    let correctNumber = Math.floor(Math.random() * maxNumber + 1)
    console.log('correctNumber:', correctNumber)
    return correctNumber
}

let random = generateRandomNumber(maxNum) // fixar ett random nummer

function newGuess() {
    let input = Number(document.getElementById('my-guess').value)
    console.log(input)

    let data = verifyGuessEvent(random, input)
    document.getElementById('guess-output-text').innerHTML = data[1]
    counter()
}

let tries = 1

function counter() {
    let text = `Antal försök: ${String(tries)}`
    document.getElementById('guess-output-counter').innerHTML = text
    tries++
}

function resetGame() {
    random = generateRandomNumber(maxNum)
    tries = 1
    document.getElementById('guess-output-text').innerHTML = ''
    document.getElementById('guess-output-counter').innerHTML = ''
}

function verifyGuessEvent(correctNumber, guess) {
    let isGuessCorrect = false
    let text = ''
    console.log(`Du gissade på: ${guess}`)
    if (correctNumber === guess) {
        text = 'Rätt nummer!'
        isGuessCorrect = true
    } else if (correctNumber > guess) {
        text = 'Du gissade för lågt'
    } else if (correctNumber < guess) {
        text = 'Du gissade för högt'
    } else {
        text = 'Du skrev inte in ett nummer!'
    }
    return {
        isGuessCorrect: isGuessCorrect,
        message: text
    }
}

function triggerAIOptimized() {
    // let aiGuess = 5
    let correctNumber = -1
    let data
    for (let i = 1; i < maxNum; i++) {
        data = verifyGuessEvent(random, i)
        console.log(data)
        if (data.isGuessCorrect) {
            correctNumber = i
            break
        }
        counter()
    }
    document.getElementById('guess-output-counter').innerHTML = data.message
    let text = `Antal försök: ${String(correctNumber)}`
    document.getElementById('guess-output-counter').innerHTML = text
}


document.getElementById('guess-output-text')