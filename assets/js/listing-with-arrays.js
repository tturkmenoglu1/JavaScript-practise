
const input = document.querySelector("#input")
const addBtn = document.querySelector("#add");

const sortBtn = document.querySelector("#sort");
const reverse = document.querySelector("#reverse");
const removeL = document.querySelector("#removeL");
const removeF = document.querySelector("#removeF");
const removeA = document.querySelector("#removeA");
const mixBtn = document.querySelector("#mix");

const list = document.querySelector(".listing");


 
addBtn.addEventListener("click", () => {
    !input.value && alert("Input cannot be blank");

    element = input.value;

    list.innerHTML += `<li>${element}</li>`;

});

sort.addEventListener("click", () => {
    alert("ok")
    let toSort = getList();
    console.log(toSort)

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

const getList = () => {
    let listEl = [];
    let ulist = document.querySelectorAll(".listing li");
    for (let i = 0; i < ulist.length; i++) {
        listEl += ulist[i].outerText;
    }
    return listEl;

}


