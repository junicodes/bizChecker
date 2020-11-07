const username = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userImage = document.querySelector('#user-img');
const businessCount = document.querySelector('#business-count');
const businessContainers = document.querySelector('#businessDetails');


const loadDashboard = async () =>{
    const businessInfo = await loadUsersBusinesses();

    username.innerText = bizness_owner;
    userEmail.innerText = email;
    userImage.src = '/images/noimage.jpg'
    businessCount.innerHTML = businessInfo.data.length;
    const businesses = businessInfo.data;

    document.querySelector('#preloader').classList.add('hidden-display')
    document.querySelector('#user-dash').classList.remove('hidden-display')

    businesses.map((business) => {
        businessContainers.innerHTML = `
        <div class="col-12 business-card mt-3 d-flex">
                                    <div class="business-image mt-3">
                                        <img src="images/sample-logo.png" alt="">
                                    </div>
                                    <div class="float-right business-info pl-2 ml-2 mt-2">
                                        <span class="business-info-name">
                                        ${business.bizness_name}
                                        </span>
                                        <div class="form-group">
                                            <label class="mb-0" for="">Business CAC Verification link</label>
                                            <p style='border: 1px solid #c4c4c4; border-radius:5px; font-size:1.5em' class='pt-2 pb-2'><a href='https://pensive-haibt-48a7c6.netlify.app/verify.html?cacToken=${business.inapp_cac_url_token}'>https://pensive-haibt-48a7c6.netlify.app/verify?cacToken=${business.inapp_cac_url_token}</a></p>
                                            <code>
                                            <textarea class="form-control embed-anchor" id="" style="height: 300px;">
                                            <blockquote class="embedly-card"><h4><a href="https://pensive-haibt-48a7c6.netlify.app/verify.html?cacToken=${business.inapp_cac_url_token}">Verify Business | Biz Checker</a></h4><p>null</p></blockquote><script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
                                            </textarea>
                                            </code>
                                            <small style="font-size: 10px;">Copy link or Embed HTML code into your application to verify Business to your customers.</small>

                                            <p class="mt-3" style="font-size: 15px;">Financial Institution Linked </p>
                                            <hr>
                                            <div class="row p-0 m-0" style="width: 100%; height: 80px; background: #e6e6e6; overflow: hidden; overflow-x: scroll;">
                                                <div class="mx-2 my-2 border" style="width: 60px; height: 50px; border-radius: 3px;">
                                                    <img style="width: 100%; height: 100%;" src="images/gtbank-icon.jfif" alt="">
                                                </div>
                                                <div class="mx-2 my-2 border" style="width: 60px; height: 50px; border-radius: 3px;">
                                                    <img style="width: 100%; height: 100%;" src="images/fedelity.jpg" alt="">
                                                </div>
                                                <div class="mx-2 my-2 border" style="width: 60px; height: 50px; border-radius: 3px;">
                                                    <img style="width: 100%; height: 100%;" src="images/zenith.png" alt="">
                                                </div>
                                            </div>
                                            <hr>
                                        </div>
                                    </div>
                                    <div class="float-right b2b-button ml-2 mt-3">
                                        <button class="btn btn-danger">MONO <br> <small>B2B Account Verification</small></button>
                                        <p class="m-0 mt-2 p-0" style="font-size: 10px; font-weight: normal;">Click the MONO button to begin bank account verification for Business to Business(B2B) transactions</p>
                                    </div>
                                </div>
        `
    })



}

loadDashboard();

/*
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
})*/