function validatePass(){
    let pass = document.querySelector("#password");
    let confirmPass = document.querySelector("#confirmPassword");

    if (pass.value !== confirmPass.value){
        return false;
    }   
}
