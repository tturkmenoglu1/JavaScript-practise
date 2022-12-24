
const nameIn = document.querySelector("#name")
const pointIn = document.querySelector("#point")
const addBtn = document.querySelector("#addBtn")
const tbody = document.querySelector("tbody")

addBtn.addEventListener("click", () => {
    let newName = nameIn.value;
    let newPoint = pointIn.valu;
    let newStudent = `
    <tr>
     <th scope="row">1</th>
     <td>${newName}</td>
     <td>${newPoint}</td>
     <td>
       <div>
         <button class="edit"><i class="fa-solid fa-pen"></i></button>
         <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
       </div>
     </td>
    </tr>`
    
    tbody.innerHTML += newStudent
})
