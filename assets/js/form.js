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
let todos = [];

// addBtn.addEventListener("click", )
addTask.addEventListener("submit", (e) => {
	e.preventDefault();

	const taskText = addTask.querySelector("#taskInput");
	if (taskText.value !== "") {
		const newTask = document.createElement("li");
		newTask.classList.add("taskElem");
		newTask.innerHTML = `<p class="taskText">${taskText.value}</p><button class="taskDltBtn">X</button>`;
		tasks.appendChild(newTask);

		const newElem = new Task(`${taskText.value}`);
		todos.push(newElem);
		deleteTasksList = document.querySelectorAll(".taskDltBtn");

		deleteTasksList.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				// debugger;

				// Delete task from arr "todos"
				let deletedTaskText =
					btn.parentElement.querySelector(".taskText").textContent;
				const deletedTaskIndex = todos
					.map((el) => el.text)
					.indexOf(deletedTaskText);

				if (deletedTaskIndex !== -1) {
					todos = todos
						.slice(0, deletedTaskIndex)
						.concat(todos.slice(deletedTaskIndex + 1));

					// Delete task from UI
					btn.parentElement.remove();
					deleteTasksList = document.querySelectorAll(".taskDltBtn");
				} else {
					new TypeError("Unknown index of task");
				}
			});
		});
	}
});

// deleteTasksList.forEach((btn) => {
// 	btn.addEventListener("click", (e) => {

// 	});
// });
