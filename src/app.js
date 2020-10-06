document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'ballons',
      img: '../src/images/ballons.jpg'
    },
    {
      name: 'ballons',
      img: '../src/images/ballons.jpg'
    },
    {
      name: 'cone',
      img: '../src/images/cone.jpg'
    },
    {
      name: 'cone',
      img: '../src/images/cone.jpg'
    },
    {
      name: 'cupcake',
      img: '../src/images/cupcake.jpg'
    },
    {
      name: 'cupcake',
      img: '../src/images/cupcake.jpg'
    },
    {
      name: 'maple',
      img: '../src/images/maple.jpg'
    },
    {
      name: 'maple',
      img: '../src/images/maple.jpg'
    },
    {
      name: 'owl',
      img: '../src/images/owl.jpg'
    },
    {
      name: 'owl',
      img: '../src/images/owl.jpg'
    },
    {
      name: 'ring',
      img: '../src/images/ring.jpg'
    },
    {
      name: 'ring',
      img: '../src/images/ring.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []


//create gameboard
function creatBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', '../src/images/quest.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
 function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '../src/images/quest.png')
      cards[optionTwoId].setAttribute('src', '../src/images/quest.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', '../src/images/blank.jpg')
      cards[optionTwoId].setAttribute('src', '../src/images/blank.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '../src/images/quest.png')
      cards[optionTwoId].setAttribute('src', '../src/images/quest.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

//flip ard
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}


creatBoard();




})