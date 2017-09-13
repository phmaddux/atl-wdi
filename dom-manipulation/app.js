window.onload = function() {
    const button = document.querySelectorAll("button")[0];
        button.addEventListener("click", function() {
        alert("You have clicked button 1.");
    });
    const paragraph = document.createElement("p");
    paragraph.textContent = `A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).`         

    const button2 = document.getElementsByTagName("button")[1];
    button2.addEventListener("click", function() {
        document.body.appendChild(paragraph);
    });

    const button3 = document.getElementsByTagName("button")[2];
    button3.addEventListener("click", function() {
        document.body.removeChild(paragraph);
})    

}
