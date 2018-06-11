const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

// append it to the `<ul id='todo-list'></ul>`element
const ul = document.querySelector('#todo-list')

tasks.forEach(function(list) {
	const li = document.createElement('li')
	li.textContent = list
	ul.appendChild(li);
});

// - Add a click listener to the `<li></li>` elements that adds the css class that
//   you created in the previous step to the element that was clicked

// Update the callback function so that clicking on the list element toggles
//   (i.e. add/remove) the `.done` css class (hint: take a look at the
//   documentation for `.classList.toggle()`)
const listItems = document.querySelectorAll('li')

listItems.forEach(function(item){
	item.addEventListener("click", function(){
		// item.setAttribute("class","done")
		item.classList.toggle("done")
	})
})


// ### Adding more To-Do items
// - Add a `<input>` HTML element 
// document.body.onload = addElement;

// function addElement() {
// 	const newInput = document.createElement("input");
// 	const newContent = document.createTextNode("add to do");
// 	newInput.appendChild(newContent);
// }
// console.log(ul)
const input = document.createElement("input")
document.body.appendChild(input)

// and a `<button>Add Todo</button>` HTML element.
// const button = document.createElement("button")
// // const textContent = document.createTextNode("Add Todo")
// document.body.appendChild(button)

// - Add a 'click' event listener to the button that adds the value of the
//   `<input>` element as a new todo in the `ul#todo-list` (follow the 3 steps for
//   creating and appending a new DOM element - (i) `createElement`, (ii) change
//   any attributes if necessary, (iii) use `appendChild` to append it to the
//   appropriate HTML element)
// get input from user
// function getInput() {
// const newItem = document.querySelector("input")
// }
// console.log(input)
const newitem = document.querySelector('input').value

// getInput.forEach(function(item) { 
	const newItem = document.createElement('li')
	// const button = document.querySelector("#button");
	// newItem.textContent = item
	button.addEventListener("click", function() {
		ul.appendChild(newItem);
	})
// };


// - Add css styling and make this a nice todo list that you can show off!

// - Bonus: Allow user to create a todo when they press the <kbd>Enter</kbd> key
const x = document.querySelector("input")

function y() {
	const keyboardEnter = document.createElement('kbd');

}
