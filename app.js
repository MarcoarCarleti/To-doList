const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("[data-list]");
const addButton = document.querySelector("[data-add-button]");
const error = document.querySelector("[data-error]");

//Add Task Function
addButton.addEventListener("click", () => {
  if (inputBox.value === "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

//Complete / Remove Task Function
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//Save data on a localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//Show the data saved
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showList();
