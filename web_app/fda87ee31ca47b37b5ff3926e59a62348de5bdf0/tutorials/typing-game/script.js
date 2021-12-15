const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')

async function renderNewQuote() {
  const quote = await getRandomQuote()
  quoteInputElement.value = null

  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
    })

    quoteInputElement.addEventListener('input', () => { // The 'input' gets called everytime something in the text area changes
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')
  let correct = true       // If we typed the right characters
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
        characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false      // If we typed the wrong characters
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })
})
}

renderNewQuote()

const timerElement = document.getElementById('timer')

let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}
 
function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000) // For the timer to work accurately in seconds
}