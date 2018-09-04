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


// and a `<button>Add Todo</button>` HTML element.


// - Add a 'click' event listener to the button that adds the value of the
//   `<input>` element as a new todo in the `ul#todo-list` (follow the 3 steps for
//   creating and appending a new DOM element - (i) `createElement`, (ii) change
//   any attributes if necessary, (iii) use `appendChild` to append it to the
//   appropriate HTML element)
	
	const button = document.querySelector("#add-todo");
	
	button.addEventListener("click", function(e) {
		e.preventDefault()

		// 1. create element
		const newItem = document.createElement('li')
		
		// 2. set value of element
		const userInputValue = document.querySelector('input').value
		newItem.textContent = userInputValue
		
		// 3. append element to parent
		ul.appendChild(newItem);

		document.querySelector("#newInput").value = ""
	})
// };


// - Add css styling and make this a nice todo list that you can show off!

// - Bonus: Allow user to create a todo when they press the <kbd>Enter</kbd> key
document.query
