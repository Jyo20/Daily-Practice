let data = [];
function register() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let obj = {
    name: name.value,
    email: email.value,
  };
  data.push(obj);
  console.log(data);
  storeddata(data);
}

let storeddata = (data) => {
  let usrr = document.querySelector("tbody");
  usrr.innerText = "";
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    row.style.backgroundColor = "darkviolet";
    row.style.textAlign = "center";
    row.style.fontSize = "20px";
    let col1 = document.createElement("td");
    col1.innerText = data[i].name;
    let col2 = document.createElement("td");
    col2.innerText = data[i].email;
    let col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.style.cursor = "pointer";
    col3.classList.add("delete");
    col3.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
    console.log(col1, col2, col3);
    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  }
  name.value = "";
  email.value = "";
};
