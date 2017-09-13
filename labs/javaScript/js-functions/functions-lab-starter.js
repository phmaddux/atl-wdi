// Question 1
function maxOfTwoNumbers(x, y) {
    if (x < y) {
       return y
    }
    else if(y < x) {
        return x
    }
}
maxOfTwoNumbers(2, 4);
// Question 2
function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    else if (y > x && y > z) {
        return y;
    }
    else {
        return z;
    }
}
maxOfThree(2, 3, 4);
maxOfThree(2, 7, 3);

// Question 3
function isCharacterAVowel(c) {
    var vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(c) !== -1) {
      return true;
    } 
    return false;
  }
isCharacterAVowel("u");

// Question 4
function sumArray()
const num = [1, 2, 3, 4];
function sumArray(num) {
  var sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum += num[i];
    }
    return sum;
}  


// Question 4
const num = [1, 2, 3, 4];
function productArray(num) {
  var product = num[0];
  for (var i = 0; i < num.length; i++) {
    product *= num[i];
    }
    return product;
}
productArray(num);

// Question 5
var numberOfArguments = function() {
    var args = ["Life", "Money", "Trash"];
    return args.length;
  };
numberOfArguments();



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
