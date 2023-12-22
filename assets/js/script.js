// window - об'єктне уявлення браузера

// window.document - DOM
// document - DOM

/*
  по кліку на кнопку вивести на екран якесь повідомлення (alert)

  1. маємо знати з ким буде щось відбуватися
  2. маємо сказати, коли нам потрібно щось робити
  3. 
*/

// 1
const buttons = document.getElementsByTagName("button");
const button = buttons[0];

// 2
// eventTarget.AddEventListeber('event type', callbackListener)
button.addEventListener("click", btnAlert);

// 3
function btnAlert() {
	alert("Hello from JS");
}
