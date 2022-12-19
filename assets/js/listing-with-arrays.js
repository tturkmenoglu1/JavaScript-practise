
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
    getList;

    !input.value && alert("Input cannot be blank");

    element = input.value;

    listing.push(element)

    for (const li of listing) {
        list.innerHTML = `<li>${li}</li>`;;
    }

    /* elements += `<li>${input.value}</li>`; */

});

sort.addEventListener("click", () => {
    let lis = "";
    for (const li of list) {
        lis += li;
    }
    console.log(lis)
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
    let listing = list.childNodes.TextNode;
    for(let i=0;i < listing.length; i++) {
    let listEl = listing[i];
    alert(listEl);
}
}


