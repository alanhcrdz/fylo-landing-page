/* const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    checkEmail();

});

function checkEmail(){
    //check for valid characters
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         var email = document.getElementById('email').value;
         var error = document.querySelector('#error');
         const input = document.getElementById('email');         

         

         if(email == "")
         {
             
             error.innerHTML = 'Email cannot be empty';
             input.style.border = '2px solid red';
                
             return false;
         }else if (!re.test(email))
         {
            error.innerHTML = 'Invalid email';
             return false;
         }else{
            error.innerHTML = '';
            input.style.border = '1px solid #ccc';

            return true;
         }
         
 }



 */