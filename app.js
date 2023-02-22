//  ROLL THE DICE 

const dice = document.querySelector(".dice");


let randomSide = 'show-bottom';
const sides = ['show-top', 'show-bottom', 'show-right', 'show-left', 'show-front', 'show-back']


const makeSureIsDif = () => {
  let newRandomSide = sides[Math.floor(Math.random()*sides.length)]
  while (newRandomSide === randomSide) {
    newRandomSide = sides[Math.floor(Math.random()*sides.length)]
  }
  randomSide = newRandomSide
}

const firstRoll = () => {
  dice.classList.remove(randomSide)
  makeSureIsDif()
  dice.classList.add(randomSide)
}

const secondRoll = () => {
  dice.classList.remove(randomSide)
  makeSureIsDif()
  dice.classList.add(randomSide)
}

const thirdRoll = () => {
  dice.classList.remove(randomSide)
  makeSureIsDif()
  dice.classList.add(randomSide)
}

const fourthRoll = () => {
  dice.classList.remove(randomSide)
  makeSureIsDif()
  dice.classList.add(randomSide)
}

const fifthRoll = () => { 
  dice.classList.remove(randomSide)
  makeSureIsDif()
  dice.classList.add(randomSide)
}

const rollTheDice = () => {
    firstRoll()
    setTimeout(() => {  secondRoll(); }, 500)
    setTimeout(() => {  thirdRoll(); }, 1000);
    setTimeout(() => {  fourthRoll(); }, 1500)
    setTimeout(() => {  fifthRoll(); }, 2000);
}

dice.addEventListener('click', rollTheDice);

