// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1
const $h1 = $('h1')

// 2. Grab the HTML element that is both an H1 and has an ID of "second"
const $second = $('h1#second');

// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"
const $myDiv = $('#myDiv').text("jQuery makes JS easy!");

// 4. Append this image to end of the body. http://www.fillmurray.com/200/200
const $body = $('body').append("<img src=\"http://www.fillmurray.com/200/200" />"");

// 5. Change the background color of the page to green.
const $body = $('body').css(color: green);

// 6. Remove the div with and ID of 'myDiv'