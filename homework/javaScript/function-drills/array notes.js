const array = [1, 2, 3];

for(let i = 0; i <array.length; i++) {
	console.log(array[i]);
}
// Old above,
const logTheNumber = function (number) {
	console.log(number);
// New Below
}

array.forEach(logTheNumber)

const people = [ 
	{firstName: 'Erica'},
	{firstName: 'Bob'}
	]

people.forEach(function (person) {
	console.log(person.firstName);
})




const printFirstName = function (person) {
	console.log(person.firstName)
}

people.forEach(printFirstName);