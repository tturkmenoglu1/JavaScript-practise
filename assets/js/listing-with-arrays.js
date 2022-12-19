
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

    !input.value && alert("Input cannot be blank");

    element = `<li>${input.value}</li>`;

    list.innerHTML += element

    /* elements += `<li>${input.value}</li>`; */

});

sort.addEventListener("click", () => {
});


reverse.addEventListener("click", () => {

});


removeF.addEventListener("click", () => {

});


removeL.addEventListener("click", () => {

});


removeA.addEventListener("click", () => {

});
mix.addEventListener("click", () => {

});


