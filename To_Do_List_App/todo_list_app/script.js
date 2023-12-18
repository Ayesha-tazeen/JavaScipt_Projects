
const button = document.querySelector('#button')
function handleclick() {


    let input = document.getElementById('input_box')
    if (input.value == "") {
        alert("please enter some work to do")
    }
    else if (input.value.trim() !== "") {
        let list = document.createElement('li')
        let container = document.getElementById('list_container')
        container.appendChild(list)
        list.innerHTML = `<img  class="checkbox"src="unchecked.png" onclick='togglecheckbox(this)'></img>${input.value}`

    }
    else {
        console.log("error")
    }

    input.value = ""
}
function cut() {

}
function togglecheckbox(checkbox) {
    const currentSrc = checkbox.src;

    if (currentSrc.includes('unchecked.png')) {
        checkbox.src = 'checkedd.png';
    } else {
        checkbox.src = 'unchecked.png';
    }
}




button.addEventListener('click', handleclick)

