/*
 * Quick tutorial reference
 * Here is an awesome site for references https://developer.mozilla.org/en-US/
 */

// Main variables block scope cannot reassign
const myVar = true;
// Block scope can be reassigned
let test;

// Branches if the statement withen evaluates to truthy then run the block of code
if (myVar === true) {
	test = true;
// else do this if the if block was not run
} else {
	test = false;
}

// Functions a block of code to be executed on call
function myFunction(stuff) {
	return (parseInt(stuff) || 0) + 1;
}

console.log('This will write things to the browsers console');

// should print 2
console.log(myFunction(1));
// should print 1
console.log(myFunction('test'));

/*
 * Operators
 * + - * /
 * Logic operators
 * || && > < >= <= == ===
 * Arrays
 * [] are lists of things has help function like forEach
 * Objects
 * {} have many properties that are generally named and go together
 */
const Taber = {
	age: 26,
	handle: 'tabersays',
	firstName: 'Taber',
	middleName: 'Storm',
	lastName: 'Fitzgerald',
	fullName: function() {
		return `${this.firstName} ${this.middleName} ${this.lastName}`
	},
	class: 'Bard',
	skills: ['Programming', 'Role playing', 'Computers']
};

console.log(Taber);
console.log(Taber.fullName());
console.log(`I like ${Taber.skills.join()}`);

/*
 * Inaction being used with html
 */

let currentColor = 'white';
function toggleColors() {
	if (currentColor === 'white') {
		currentColor = 'pink';
		const element = document.getElementsByClassName('content')[0];
		element.className = 'content pink';
	} else if (currentColor === 'pink'){
		currentColor = 'blue';
		const element = document.getElementsByClassName('content')[0];
		element.className = 'content blue';
	} else if (currentColor === 'blue'){
		currentColor = 'purple';
		const element = document.getElementsByClassName('content')[0];
		element.className = 'content purple';
	} else if (currentColor === 'purple'){
		currentColor = 'yellow';
		const element = document.getElementsByClassName('content')[0];
		element.className = 'content yellow';
	} else if (currentColor === 'yellow'){
		currentColor = 'green';
		const element = document.getElementsByClassName('content')[0];
		element.className = 'content green';
	}else if (currentColor === 'green'){
		currentColor = 'white';
		const element = document.getElementsByClassName('content')[0];
		element.className = 'content white';
	}
}
