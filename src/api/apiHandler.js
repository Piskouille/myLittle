import axios from 'axios'

const postNewUser = async ({choice, email, birthDate, optin}) => {
    try{
        await axios.post("https://61bb0826e943920017784bb1.mockapi.io/api/v1/suscribers", {
            choice,
            email,
            birthDate,
            optin: optin
        })
    }
    catch(err){
        console.log(err)
    }
}

export {postNewUser}