document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();

        let email = document.getElementById("emailAddress").value;
        let errorMessage = document.getElementById("errorMessage");

        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         if(re.test(email)){
            errorMessage.textContent = "";
            return true;
         } else {
            errorMessage.textContent = "Please enter a valid email address";
            return false;
         }
    })
})