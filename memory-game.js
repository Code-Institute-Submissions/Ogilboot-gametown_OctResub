// list of all our 'cards'
const cardArray = [
    {
        name: 'fries',
        img: 'assets/images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'assets/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'assets/images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'assets/images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'assets/images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'assets/images/pizza.png',
    },
    {
        name: 'fries',
        img: 'assets/images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'assets/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'assets/images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'assets/images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'assets/images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'assets/images/pizza.png',
    },
]


// randomises the card selection when building our grid
cardArray.sort(() => 0.5 - Math.random())

// variables & arrays
const gridDisplay = document.querySelector('#memoryGrid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

// creates our board, populated with 'blank' cards
function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)

    }
}
createBoard()

// checks for correct / incorrect choices and alerts appropriately
function checkMatch() {

    const cards = document.querySelectorAll('#memoryGrid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) 
    {
        cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) 
    {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'assets/images/white.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } 
    else 
    {
        cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
        alert('Sorry try again!')
    }

    // updates score and resets cards
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    // checks if game complete - if so, reloads page
    if (cardsWon.length == cardArray.length/2) 
    {
        resultDisplay.innerHTML = 'Congratulations! You found them all you Clever Sausage.'
        setTimeout(reloadGame, 3000)
    }

}

// 'flips' card
function flipCard() 
{
    const cardId = this.getAttribute('data-id')

    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) 
    {
        setTimeout(checkMatch, 500)
    }
}

// reloads page
function reloadGame() {
    document.location.reload()
}
