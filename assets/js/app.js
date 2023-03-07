// First - store a value using sessionStorage.setItem("key", "value")

// Now get it and display it somewhere

// Delete the sessionStorage and the code above and do the main task:
localStorage.clear
// Get the form
const userInput = document.querySelector("form");

// Listen for submit event, prevent default, store the first+last name in sessionStorage
userInput.addEventListener("submit", function(e){
    e.preventDefault();
    const formFirstName = userInput.formFirstName.value;
    const formLastName = userInput.formLastName.value;
    const newUser = {
        firstName: formFirstName,
        lastName: formLastName,
    }
    localStorage.setItem("user", JSON.stringify(newUser))
})

// Get the .currentUser and store the value of the sessionStorage in there
const currentUser = document.querySelector(".currentUser")
currentUser.innerHTML = localStorage.getItem("user");

// Now try getting the sessionStorage from anotherfile.html

// IF you have time - rework the data to store an array of data instead of a single object
