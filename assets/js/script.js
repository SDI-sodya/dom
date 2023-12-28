// window - об'єктне уявлення браузера

// window.document - DOM
// document - DOM

/*
  по кліку на кнопку вивести на екран якесь повідомлення (alert)

  1. маємо знати з ким буде щось відбуватися
  2. маємо сказати, коли нам потрібно щось робити
  3. 
*/

// // 1
// const buttons = document.getElementsByTagName("button");
// const button = buttons[0];

// // 2
// // eventTarget.AddEventListeber('event type', callbackListener)
// button.addEventListener("click", btnAlert);

// // 3
// function btnAlert() {
// 	alert("Hello from JS");
// }

// function clickCounter() {
// 	alert(++clickQuantity);
// }

// function createClickHandler() {
// 	let clicks = 0;

// 	return function clickHandler() {
// 		alert(++clicks);
// 	};
// }

// const button = document.getElementsByTagName("button")[0];
// let clickQuantity = 0;
// button.addEventListener("click", () => alert(++clickQuantity));
// button.addEventListener("click", clickCounter);

//
// const test1 = document.querySelector("section > h1")
// const test2 = document.getElementsByTagName("img");
// const test3 = document
// .getElementsByClassName("section")[0]
// .getElementsByTagName("p");

// const button = document.querySelector("button");
// function getBtnText() {
// 	alert(button.textContent); // Node
// 	alert(button.innerHTML); // Element
// 	alert(button.innerText); // HTML_Element
// }
// button.addEventListener("click", getBtnText);

/*
  1  зробити кнопку при натисканні на яку у користувача питають промпром число
  2  також поруч з кнопкою має бути параграф
  3  в параграфі ви маєпо показати результат зведення данго користувачем числа у квадрат
*/
// function showResult() {
// 	let num = +prompt();
// 	document.querySelector("#task2 ~ p").innerHTML(`<p>${Math.pow(num, 2)}</p>`);
// }

// const btn = document.querySelector("#task2");
// btn.addEventListener("click", showResult);

// WHAAAT???????????
//
// const btnContainer = document.getElementById("btnContainer");

// btnContainer.addEventListener("click", (e) => {
// 	if (e.target.tagName === "BUTTON") {
// 		btnContainer.style.backgroundColor = `${e.target.TextContent}`;
// 	}
// });

// const images = ["./assets/images/cat.avif", "./assets/images/dog.webp"];

// const catImg = document.querySelector("#imageCD");
// const catSwitchBtn = document.querySelector("#catDogBtn");

// catSwitchBtn.addEventListener("click", (e) => {
// 	if (catImg.getAttribute("src") === images[0]) {
// 		catImg.setAttribute("src", images[1]);
// 	} else {
// 		catImg.setAttribute("src", images[0]);
// 	}
// });

// btn.addEventListener(
// 	"click",
// 	btnChangeImg
// 		.querySelector("#catDogBtn ~ button")
// 		.setAttribute("src", `${images[1]}`)
// );

// const divColor = document.getElementById("change-color");
// divColor.addEventListener("click", (e) => {
// 	if (e.target.tagName !== "BUTTON") {
// 		return;
// 	}
// 	divColor.style.backgroundColor = e.target.dataset.color;
// });

// const root = document.getElementById("root");

// // створення елементів через DOM
// const elem = document.createElement("div");
// elem.textContent = "I'm from DOM";
// root.appendChild(elem);

// ================28/12/23=================

// task 1
// const dltBtn = document.getElementById("deleteMe");
// const dltBtn = document.querySelector("button[id='deleteMe']");
const dltBtn = document.querySelector("button#deleteMe");

dltBtn.addEventListener("click", (e) => {
	// dltBtn.remove();
	// e.target.remove();
	e.currentTarget.remove();
});
