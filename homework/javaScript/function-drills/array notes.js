const array = [1, 2, 3];

for(let i = 0; i <array.length; i++) {
	console.log(array[i]);
}
Old above, new below
const logTheNumber = function (number) {
	console.log(number);

}

array.forEach(logTheNumber)

