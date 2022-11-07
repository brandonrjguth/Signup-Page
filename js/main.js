let submitBtn = document.querySelector("button");
let inputs = document.querySelectorAll("input");
let pass = document.querySelector("#password");
let confirmPass = document.querySelector("#confirmPassword");
let confirmPasswordError = document.querySelector(".confirmPasswordError");

//Remove default pop-up on invalid form;
document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
    };
  })(), true);


//On button click, show instructions for any invalid or empty forms
submitBtn.addEventListener("click", () => {

    inputs.forEach((input) =>{

        //I've given each error message a class named after the ID of the corresponding input, I use that to target the correct error messages to hide and unhide.
        let errorSelector = input.id + "Error";
        let error = document.querySelector(`.${errorSelector}`);

        if (input.validity.patternMismatch || input.value == ""){
            error.classList.remove("hidden");
        } else {
            error.classList.add("hidden");
        }
    })

    //Display a message if the passwords do not match.
    if (pass.value !== confirmPass.value){
        confirmPasswordError.textContent = "Your passwords do not match";
        confirmPasswordError.classList.remove("hidden");
    } else {
        confirmPasswordError.textContent = "Please confirm your password.";
    }
})


//If passwords do not much, alert user and return false. This function runs during the "onsubmit" event in the form, returning false will stop the form from being submitted.
function validatePass(){

    if (pass.value !== confirmPass.value){

        confirmPasswordError.textContent = "Your passwords do not match";
        confirmPasswordError.classList.remove("hidden");
        return false;
    }   
}
