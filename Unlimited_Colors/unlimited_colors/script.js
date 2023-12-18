//generate a random color
const randomcolor = function () {
    const code = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random() * 16)]

    }
    return color;
}
let intervalID;
console.log(randomcolor())
let setbgcolor = function () {
    let color = randomcolor()
    document.querySelector("#hello").innerHTML=`${color}`
    document.body.style.backgroundColor = randomcolor()
}
const startChangingColor = function () {
    stopChangingColor();
    setbgcolor()
    intervalID = setInterval(setbgcolor, 1000)
}

const stopChangingColor = function () {
    clearInterval(intervalID)
}
document.querySelector('.start').addEventListener("click", startChangingColor)
document.querySelector('.stop').addEventListener("click", stopChangingColor)


