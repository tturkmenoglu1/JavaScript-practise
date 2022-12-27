
const nameIn = document.querySelector("#name")
const pointIn = document.querySelector("#point")
const addBtn = document.querySelector("#addBtn")
const tbody = document.querySelector(".tbody")
const delBtn = document.querySelectorAll(".delete")
const fixBtn = document.querySelector("#fix")


/* ID GENERATOR */

const idGen = () => {
  const ids = document.querySelectorAll(".idV")
  let len = ids.length

  for (let i = 0; i < len; i++) {
    ids[i].innerText = i+1;
    console.log("ids[i].innerText")
  }
}

/* FIND AVERAGE */

const findAvrg = () => {
  const scores = document.querySelectorAll(".pointV")
  let temp = 0;
  let len = scores.length
  scores.forEach(score => {
    temp += Number(score.innerText);
  });
  let result = Math.floor(temp / len);
  const average = document.querySelector("#average");
  average.innerHTML = result
}

addBtn.addEventListener("click", () => {
    let newName = nameIn.value;
    let newPoint = pointIn.value;
    let newStudent = `
    <tr>
     <th class="idV" scope="row">#</th>
     <td class="nameV">${newName}</td>
     <td class="pointV">${newPoint}</td>
     <td>
       <div class="edit">
         <button class="update"><i class="fa-solid fa-pen"></i></button>
         <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
       </div>
     </td>
    </tr>`
    
  tbody.innerHTML += newStudent
})



/* 
delBtn.addEventListener("click", (e) => {
  alert(ok)
  const row = e.target.closest("tr")

  const result = confirm(`Are you sure to delete ${row}?`);
  if (result) {
    row = "";
  }
}) */


fixBtn.addEventListener("click", () => {
  idGen();
  findAvrg();
})


