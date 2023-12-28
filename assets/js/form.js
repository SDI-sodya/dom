// "use strict";
class Task {
	constructor(text) {
		this.text = text;
		this.isChecked = false;
	}
}

const addTask = document.querySelector("#toDoList");
const tasks = document.querySelector("#tasks");

let deleteTasksList = [];

// addBtn.addEventListener("click", )
addTask.addEventListener("submit", (e) => {
	e.preventDefault();
	const taskText = addTask.querySelector("#taskInput");
	if (taskText.value !== "") {
		const newTask = document.createElement("li");
		newTask.classList.add("taskElem");
		newTask.innerHTML = `<p class="taskText">${taskText.value}</p><button class="taskDltBtn">X</button>`;
		tasks.appendChild(newTask);

		// const newElem = new

		deleteTasksList = document.querySelectorAll(".taskDltBtn");
		deleteTasksList.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				btn.parentElement.remove();
				deleteTasksList = document.querySelectorAll(".taskDltBtn");
			});
		});
	}
});
