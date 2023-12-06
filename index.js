
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() { 
    let countString = count + " - "
    saveEl.textContent += countString
    console.log(count)
}
