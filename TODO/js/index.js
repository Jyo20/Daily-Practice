let arr = [];
let today = new Date();
const options = { weekday: "long", day: "numeric", month: "long" };
function checkNoTodo() {
  if (arr.length == 0) {
    let noTodo = document.getElementById("card");
    noTodo.classList.remove("d-none");
    noTodo.classList.add("card");
  } else {
    let noTodo = document.getElementById("card");
    noTodo.classList.remove("card");
    noTodo.style.display = "none";
  }
}
function displayData(arr) {
  document.getElementById("todo-body").innerHTML = "";
  arr.map((ele) => {
    let div = document.createElement("div");
    div.classList.add("todo");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("done");
    let contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    let title = document.createElement("p");
    title.classList.add("todo-title");
    let desc = document.createElement("p");
    desc.classList.add("desc");
    let due_date = document.createElement("p");
    due_date.classList.add("due");
    //value
    title.innerText = ele.title;
    desc.innerText = ele.desc;
    let date = new Date(ele.due_date);
    let fDate = date.toLocaleDateString("en", options);
    let fTime = date.toLocaleTimeString("en-US");
    due_date.innerText = fTime + " " + fDate;
    console.log(due_date);
    document.getElementById("todo-body").appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(contentDiv);
    contentDiv.appendChild(title);
    contentDiv.appendChild(desc);
    contentDiv.appendChild(due_date);
  });
}

function sortTodos() {
  let sorted = arr.sort((a, b) => {
    let dateA = new Date(a.due_date);
    let dateB = new Date(b.due_date);
    //console.log(dateA);
    //compare
    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log("sorted: ", sorted);
}
function blankInput() {
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("duedate").value = "";
}

function addTodo() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let due_date = document.getElementById("duedate").value;
  let obj = {
    title,
    desc,
    due_date,
  };
  arr.push(obj);
  //console.log(arr);
  displayData(arr);
  sortTodos();
  blankInput();
  checkNoTodo();
}
