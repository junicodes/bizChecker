const registrationForm = document.querySelector('#registration-form');
const registrationBtn = document.querySelector('#signup-btn');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const businessName = document.querySelector('#businessname');
const cacNumber = document.querySelector('#cacnumber');
const tinNumber = document.querySelector('#tinnumber');
const email = document.querySelector('#useremail');
const password = document.querySelector('#password');


const validPassword = () => {
    if (password.value.length < 6 ){
        return false; 
    }
    return true;
}

const testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validEmail = () => {
    if (!testEmail.test(email.value.toLowerCase())){
        return false
    }
    return true
}

const validateFields = () => {
    registrationBtn.innerHTML='<span class="spinner-border spinner-border-sm" style="width: 1.3em; height: 1.3em;" role="status" aria-hidden="true"></span> Processing...';
    if (firstName.value === '' || lastName.value === '' || businessName.value === '' || cacNumber.value === '' || tinNumber.value === '' || email.value === '' || password.value === '' ){
        alertify.set('notifier','position', 'top-center');
        alertify.error('All fields are required');
        registrationBtn.innerHTML='Create Account';

        return false 
    }else if (validEmail() === false){
        alertify.set('notifier','position', 'top-center');
        alertify.error('Please Enter a valid email of format xxxx@maildomain.com');
        registrationBtn.innerHTML='Create Account';

        return false 
    }else if (validPassword() == false){
        alertify.set('notifier','position', 'top-center');
        alertify.error('Your Password must be at least 6 characters');
        registrationBtn.innerHTML='Create Account';

    }
    return true;
}



const signUp = async () => {
   
    const routes = new Routes;
    const url = `${routes.apiOrigin}${routes.signUp}`

    const userDetails = {
       business_owner: firstName.value + ' ' + lastName.value,
        // businessName: businessName.value,
        email: email.value, 
        cac_number: cacNumber.value,
        tin_number: tinNumber.value,
        password: password.value
    }
    console.log(JSON.stringify(userDetails))
    try{
        const response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
            "Accept": "aplication/json",
            'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(userDetails),
        });

        const data = await response.json();
         
        if (data.status === true){
           
            alertify.set('notifier','position', 'top-center');

            alertify.success(data.user.message)
            registrationBtn.innerHTML='Create Account';

        }else {
            alertify.set('notifier','position', 'top-center');
            alertify.error(data.message)
            registrationBtn.innerHTML='Create Account';

        }

        }catch(error){
            registrationBtn.innerHTML='Create Account';

            alertify.set('notifier','position', 'top-center');
            alertify.error('Something went wrong please try again later')
        }
    

}

registrationBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateFields() === true){
        signUp();
    }
 
});