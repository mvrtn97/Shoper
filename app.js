const list = document.querySelector('ul');
const addBtn = document.getElementById("addBtn");
const allItems = document.getElementById("allItems");

const inputElement = document.getElementById("textField");


class Item {
  constructor(itemName, count) {
    this.itemName = itemName;
    this.count = count;
  }
}

isProduct = Boolean;

let groceries = [];

function addItem() {
  const input = inputElement.value;
  isProduct = false;

  if(input === ""){
    alert("enter some value");
  }
  else{
    groceries.forEach(item => {
      if(item.itemName === input){
        item.count += 1;
        isProduct = true;
      }
    })
  
    if(isProduct === false){
      let newItem = new Item(itemName=input, count=1);
      groceries.push(newItem);
    }
  }
  reloadDisplay();
}

function reloadDisplay(){
  let delBtn = document.createElement('button');
  let editBtn = document.createElement('button');
  let checkBtn = document.createElement('input');
  delBtn.innerHTML = "-";
  editBtn.innerHTML = "edit";
  checkBtn.type = "checkbox";

  list.innerText = '';
  groceries.forEach(item => {
    let newLi = document.createElement("li");
    newLi.innerHTML = item.itemName + " x" + item.count;
    list.insertAdjacentElement("beforeend", newLi);
    newLi.append(delBtn);
    newLi.append(editBtn);
    newLi.append(checkBtn);
  })
  inputElement.value = "";
}

addBtn.addEventListener('click', addItem);




inputElement.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addItem();
    event.preventDefault(); 
    return false;
  }
})