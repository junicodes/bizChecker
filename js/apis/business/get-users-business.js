const loadUsersBusinesses = async() => {
    const routes = new Routes;
    const url = `${routes.apiOrigin}${routes.userBusinesses}`;
    const auth = JSON.parse(localStorage.getItem('bizchecker-user-token'));

    try{
        const response = await fetch(url, {
            method: 'GET',
            headers:{
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${auth}`,
            }
        });

        const data = await response.json();
        console.log(data.yourBiznesses, data)
        if (data.success === true){
            return data.yourBiznesses;
        }else {
            alertify.set('notifier','position', 'top-center');
            alertify.error(data.message)
        }


    }catch(error){
        console.log(error)
        alertify.set('notifier','position', 'top-center');
        alertify.error('Something went wrong please try again later')
    }

}
