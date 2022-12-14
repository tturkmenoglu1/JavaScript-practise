
const nameIn = document.querySelector("#name")
const pointIn = document.querySelector("#point")
const addBtn = document.querySelector("#addBtn")
const tbody = document.querySelector(".tbody")

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
    if (newName && newPoint) {
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
    } else {
      alert("Name or point can not be empty");
    }
    
    
})

document.querySelectorAll(".update").forEach((button) => {
  button.addEventListener("click", (e) => {

    const updateBtn = e.target.closest("tr").querySelector(".update")
    const delBtn = e.target.closest("tr").querySelector(".delete")
/* isim ve puani sectigimiz yer */
    const nameUpdate = e.target.closest("tr").querySelector(".nameV")
    const pointUpdate = e.target.closest("tr").querySelector(".pointV")
/* simge degistimiz yer */
    updateBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    delBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`

    nameUpdate.dataset.name  = `<input id="updateName" type="text">`
    pointUpdate.innerHTML = `<input id="updatePoint" type="text">`

    const updatedN = document.querySelector("#updateName")
    const updatedP = document.querySelector("#updatePoint")

    updateBtn.addEventListener("click", () => {
      if (nameUpdate && pointUpdate) {
        nameUpdate.innerHTML = updatedN.value
        pointUpdate.innerHTML = updatedP.value
      }
      updateBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
      delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    })

    delBtn.addEventListener("click", () => {
      updateBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
      delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    })
  })
})
/* 
document.querySelectorAll(".update").forEach((button) => {
  button.addEventListener("click", (e) => {

    const updateBtn = e.target.closest("tr").querySelector(".update")
    const delBtn = e.target.closest("tr").querySelector(".delete")

    const nameUpdate = e.target.closest("tr").querySelector(".nameV")
    const pointUpdate = e.target.closest("tr").querySelector(".pointV")

    updateBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    delBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`

    nameUpdate.innerHTML = `<input id="updateName" type="text">`
    pointUpdate.innerHTML = `<input id="updatePoint" type="text">`

    const updatedN = document.querySelector("#updateName")
    const updatedP = document.querySelector("#updatePoint")

    updateBtn.addEventListener("click", () => {
      if (nameUpdate && pointUpdate) {
        nameUpdate.innerHTML = updatedN.value
        pointUpdate.innerHTML = updatedP.value
      }
      updateBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
      delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    })

    delBtn.addEventListener("click", () => {
      updateBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
      delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    })
  })
})
 */


/* 
delBtn.addEventListener("click", (e) => {
  const row = e.target.closest("tr")

  const result = confirm(`Are you sure to delete the student?`);
  if (result) {
    row.innerHTML= "";
  }
})
 */

document.querySelectorAll(".delete").forEach( (button)=> {
  button.addEventListener("click", (e)=>{
    const row = e.target.closest("tr")

    const result = confirm(`Are you sure to delete the student?`);
    if (result) {
      row.innerHTML= "";
    }
  })
});




