
const nameIn = document.querySelector("#name")
const pointIn = document.querySelector("#point")
const addBtn = document.querySelector("#addBtn")
const tbody = document.querySelector(".tbody")

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
