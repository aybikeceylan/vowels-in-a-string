const button = document.querySelector(".btn")
const text = document.querySelector("#text")
let counter = 0;


button.addEventListener("click", () => {

    let letterArr = text.value.split("")
    for (let i in letterArr) {
        if (letterArr[i] === "a" || letterArr[i] === "e" || letterArr[i] === "o" || letterArr[i] === "ö" || letterArr[i] === "u" || letterArr[i] === "ü" || letterArr[i] === "ı" || letterArr[i] === "i") {
            counter++
        }
    }

    document.querySelector(".vowels").innerHTML = `there are ${counter} vowels in text `

})