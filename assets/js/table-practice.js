
const nameIn = document.querySelector("#name")
const pointIn = document.querySelector("#point")
const addBtn = document.querySelector("#addBtn")
const tbody = document.querySelector(".tbody")
const delBtn = document.querySelectorAll(".delete")

const scores = document.querySelectorAll(".pointV")

const idGen = () => {
  
}

addBtn.addEventListener("click", () => {
    let newName = nameIn.value;
    let newPoint = pointIn.value;
    let newStudent = `
    <tr>
     <th class="idV" scope="row">1</th>
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



/* delBtn.addEventListener("click", (e) => {
  alert(ok)
  const row = e.target.closest("tr")

  const result = confirm(`Are you sure to delete ${row}?`);
  if (result) {
    row = "";
  }
}) */

const findAvrg = () => {
  let temp = 0;
  let len = scores.length

  scores.forEach(score => {
    console.log(score.innerText)
    temp += score.innerText;
    console.log(temp)
  });

  console.log("temp / len " + temp / len)
  let result = Number(temp / len);
  const average = document.querySelector("#average");

  average.innerHTML = result
  console.log("result " + result)
}

findAvrg();