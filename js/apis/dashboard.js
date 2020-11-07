const userInfo = JSON.parse(localStorage.getItem('bizchecker-user'));
const cacVerificationToken = userInfo.inapp_cac_url_token;


const displayToken = document.querySelector('#exampleFormControlTextarea1');
const verifyToken = document.querySelector('#verify-token-btn');
verifyToken.dataset.cactoken = cacVerificationToken;
displayToken.innerHTML = cacVerificationToken;
console.log(verifyToken.dataset.cactoken );
verifyToken.addEventListener('click', (event)=>{
    event.preventDefault();
    verifycacNumber(event.target.dataset.cactoken);
})