
const input = document.querySelector("#input")
const add = document.querySelector("#add");

const sort = document.querySelector("#sort");
const reverse = document.querySelector("#reverse");
const removeL = document.querySelector("#removeL");
const removeF = document.querySelector("#removeF");
const removeA = document.querySelector("#removeA");
const mix = document.querySelector("#mix");

const list = document.querySelector(".listing");


add.addEventListener("click", () => {
    list.innerHTML = `<li>${input.value}</li>`
})



