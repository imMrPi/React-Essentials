const list = document.getElementById("to-do-list");
const searchInput = document.querySelector("#search-form input");
const addBtn = document.querySelector("#add-form button");
const addInput = document.querySelector("#add-form input");

list.addEventListener("click", DeleteItem);

function DeleteItem(e) {
  if (e.target.className == "delete-btn") {
    e.target.parentNode.remove();
    if (list.children.length == 0) {
      const listEmpyMsg = document.createElement("div");
      listEmpyMsg.style.textAlign = "center";
      listEmpyMsg.style.color = "#333";
      listEmpyMsg.innerText = "your list is empty";
      listEmpyMsg.id = "emptyMsg";
      list.appendChild(listEmpyMsg);
    }
  }
}

addBtn.addEventListener("click", addItem);

function addItem(e) {
  e.preventDefault();
  if (!addInput.value) return;
  if (document.getElementById("emptyMsg"))
    document.getElementById("emptyMsg").remove();
  list.append(createListItem(addInput.value)); 
  addInput.value ="";
}

function createListItem(input) {
  const newItem = document.createElement("li");
  const newSpan = document.createElement("span"); 
  const newButton = document.createElement("button");

  newItem.className = "to-do-item";
  newSpan.className = "title";
  newButton.className = "delete-btn"; 

  newSpan.innerText = input;
  newButton.innerText = "Delete"; 
  newItem.appendChild(newSpan);
  newItem.appendChild(newButton);
  return newItem;
}

searchInput.addEventListener("input",search)

function search(e){
   Array.from(list.children).forEach(element => {
      if(document.getElementById("emptyMsg"))
         return;

      if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
         element.style.display = "flex";
      }else{
         element.style.display ="none";
      }
   })
}