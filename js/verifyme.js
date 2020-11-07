

const verifyMe =document.querySelector("#verify-business")
const cacName = document.querySelector("#cacName")
const cacNumber = document.querySelector("#cacNumber")



verifyMe.addEventListener('click', async (e) => {
    e.preventDefault()


    try {

        const response = await fetch(`https://app.verified.ng/rc`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'api-key': `YyZXEmaiRlHlHTuh`,
                'userid': '1602247185181'
            },

            body: {
                rcNumber: "31498",
                companyName: "Balinga Enterprises"
            }
        });
        if (!response.ok) {
            status = response.status
        }

            const result = await response.json(); 

        if (result.success) {
            console.log(result)
            return true;
        }
    } catch (error) {
        console.log(error)
    }
})