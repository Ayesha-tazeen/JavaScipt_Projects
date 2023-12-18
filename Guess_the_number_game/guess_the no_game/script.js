let random = parseInt(Math.random() * 100 + 1)
//for input
const userinput = document.querySelector('#guessfield')
//forsubmit
const submit_button = document.querySelector('#sub')

//for already guessed number
const guessed_number = document.querySelector('.guess_no')

//for remaining chance left.
const remaining_chance = document.querySelector('.chances_left')

//low or high number
const wrongattempts = document.querySelector('.lowOrHigh')

//start over
const startover = document.querySelector(".resultparsing")

const p = document.createElement("p")

let prevguess = []
let numguess = 1
let gameplay = true
if (gameplay) {
    submit_button.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validguess(guess)
    })
}


function validguess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number ")
    }
    else if (guess < 1) {
        alert("please enter a number more than 1")
    }
    else if (guess > 100) {
        alert("please enter a number less than 100")
    }
    else {
        prevguess.push(guess)
        if (numguess === 10) {
            displayguess(guess)
            displaymessage(`game over . Random number is ${random}`)
            endgame()

        }
        else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess) {
    if (guess === random) {
        displaymessage(`You guessed it right You are the winner`)
        endgame()
    }
    else if (guess > random) {
        displaymessage(`The number too high`)
    }
    else if (guess < random) {
        displaymessage(`The number too low`)
    }

}
function displayguess(guess) {
    userinput.value = ''
    guessed_number.innerHTML += `${guess} ,  `
    numguess++
    remaining_chance.innerHTML = `${10 - numguess}`
}
function displaymessage(message) {
    wrongattempts.innerHTML = `<h2>${message}</h2>`
}
function endgame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add("button")
    p.innerHTML = `<h2 id="newgame">start new game</h2>`
    startover.appendChild(p)
    gameplay = false
    newgame()
}


function newgame() {
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1)
        prevguess = [];
        numguess = 1;
        guessed_number.innerHTML = ` `;
        remaining_chance.innerHTML = `${10 - numguess}`;
        userinput.removeAttribute('disabled');
        wrongattempts.innerHTML = "";
        startover.removeChild(p);
        gameplay = true
    })


}






