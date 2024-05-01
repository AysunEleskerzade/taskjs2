let h1Div = document.querySelector("#h1")

let borderBtn1 = document.querySelector("#borderP")
let borderBtn2 = document.querySelector("#borderM")

let heightBtn1 = document.querySelector("#heightP")
let heightBtn2 = document.querySelector("#heightM")

let widthBtn1 = document.querySelector("#widthP")
let widthBtn2 = document.querySelector("#widthM")

let textColor = document.querySelector("#color")
let backColor = document.querySelector("#background")

let font = 18

let border = 18
borderBtn1.addEventListener("click", () => {
    border += 5
    h1Div.style.borderRadius = border + "px"

})
borderBtn2.addEventListener("click", () => {
    border -= 5
    h1Div.style.borderRadius = border + "px"

})


let height = 50
heightBtn1.addEventListener("click", () => {
    height += 5
    h1Div.style.height = height + "px"

})
heightBtn2.addEventListener("click", () => {
    height -= 5
    h1Div.style.height = height + "px"

})


let width = 150
widthBtn1.addEventListener("click", () => {
    width += 5
    h1Div.style.width = width + "px"

})
widthBtn2.addEventListener("click", () => {
    width -= 5
    h1Div.style.width = width + "px"

})


textColor.addEventListener("change", () => {
    h1Div.style.color = textColor.value
})


backColor.addEventListener("change", () => {
    h1Div.style.backgroundColor = backColor.value
})