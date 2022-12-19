
const input = document.querySelector("#input")
const addBtn = document.querySelector("#add");

const sortBtn = document.querySelector("#sort");
const reverse = document.querySelector("#reverse");
const removeL = document.querySelector("#removeL");
const removeF = document.querySelector("#removeF");
const removeA = document.querySelector("#removeA");
const mixBtn = document.querySelector("#mix");

const list = document.querySelector(".listing");


 
add.addEventListener("click", () => {
    !input.value && alert("Input cannot be blank");

    element = input.value;

    list.innerHTML += `<li>${element}</li>`;

});

sort.addEventListener("click", () => {
    alert("ok")
    let toSort = getList();
    toSort.sort();
    for (const el of toSort) {
        list.innerHTML += `<li>${el}</li>`;
    }

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
    let ulist = list.childNodes.TextNode;
    for(let i=0;i < ulist.length; i++) {
     listEl += ulist[i];
    alert(listEl);

}}


