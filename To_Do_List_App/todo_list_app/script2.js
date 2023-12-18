const button = document.querySelector('#button')
let container = document.getElementById('list_container')

function handleclick() {
    let input = document.getElementById('input_box')
    if (input.value == "") {
        alert("please enter some work to do")
    }
    else if (input.value.trim() !== "") {
         let list = document.createElement('li')
        container.appendChild(list)
        list.innerHTML = `<img  class="checkbox"src="unchecked.png" onclick='togglecheckbox(this)'></img>${input.value} <img class="cut-box" src="cross.jpg" onclick=cut(this)></img>`

    }
    else {
        console.log("error")
    }

    input.value = ""
}

function togglecheckbox(checkbox) {
    const currentSrc = checkbox.src;

    if (currentSrc.includes('unchecked.png')) {
        checkbox.src = 'checkedd.png';
    } else {
        checkbox.src = 'unchecked.png';
    }
}

function cut(item) {
    container.removeChild(item.parentNode)
}
button.addEventListener('click', handleclick)

