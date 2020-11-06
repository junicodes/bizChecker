const loginBtn = document.querySelector('#login-btn');
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
    loginBtn.innerHTML='<span class="spinner-border spinner-border-sm" style="width: 1.3em; height: 1.3em;" role="status" aria-hidden="true"></span> Processing...';
    if (email.value === '' || password.value === '' ){
        alertify.set('notifier','position', 'top-center');
        alertify.error('All fields are required');
        loginBtn.innerHTML='Login';

        return false 
    }else if (validEmail() === false){
        alertify.set('notifier','position', 'top-center');
        alertify.error('Please Enter a valid email of format xxxx@maildomain.com');
        loginBtn.innerHTML='Login';

        return false 
    }else if (validPassword() == false){
        alertify.set('notifier','position', 'top-center');
        alertify.error('Your Password must be at least 6 characters');
        loginBtn.innerHTML='Create Account';

    }
    return true;
}

const login = async () => {
   
    const routes = new Routes;
    const url = `${routes.apiOrigin}${routes.login}`

    const userDetails = {
      
        email: email.value, 
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
         console.log(data)
        if (data.status === true){
            localStorage.setItem('bizchecker-user', JSON.stringify(data.user));
            alertify.set('notifier','position', 'top-center');
            location.replace('/dashboard.html');
            
            loginBtn.innerHTML='Create Account';

        }else {
            alertify.set('notifier','position', 'top-center');
            alertify.error(data.message)
            loginBtn.innerHTML='Create Account';

        }

        }catch(error){
            loginBtn.innerHTML='Create Account';

            alertify.set('notifier','position', 'top-center');
            alertify.error('Something went wrong please try again later')
        }
    

}



loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateFields() === true){
        login();
    }
 
});