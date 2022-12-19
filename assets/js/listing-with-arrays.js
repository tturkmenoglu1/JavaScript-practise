
const input = document.querySelector("#input")
const addBtn = document.querySelector("#add");

const sortBtn = document.querySelector("#sort");
const reverse = document.querySelector("#reverse");
const removeL = document.querySelector("#removeL");
const removeF = document.querySelector("#removeF");
const removeA = document.querySelector("#removeA");
const mixBtn = document.querySelector("#mix");

const list = document.querySelector(".listing");

listing = [];



add.addEventListener("click", () => {

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
    var LIs = document.getElementById('list').childNodes;
    var listvar = [];
    for (var i = 0; i < LIs.length; ++i) {
        var LI = LIs[i];
        list.push(LI.innerText || LI.textContent);
    }

    return listvar;
}


