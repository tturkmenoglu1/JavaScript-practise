
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
    let toSort = getList();
    toSort.sort();
    list.innerHTML = "";
    for (const element of toSort) {
        list.innerHTML += `<li>${element}</li>`;
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
    let ulist = document.querySelectorAll(".listing li");
    /* console.log(ulist) */
    for (let i = 0; i < ulist.length; i++) {
        listEl.push(ulist[i].outerText);
    }
    return listEl;

}


