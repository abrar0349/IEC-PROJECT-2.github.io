import { createSlice } from "@reduxjs/toolkit";

let initialState =[{
    userName : 'Abrar Khan',
    userGmail : 'abrar0349khan@gmail.com',
    userPassword : 'khan',
    userCheckOut : [],
    isLogIn : false
}]
let userAccount = createSlice({
    name :'userAccount',
    initialState,
     reducers :{
        createUsrAcc : (state, action) => {
            state.push(action.payload)
        },
        userLogin : (state , action) => {

            let {userNameorEmail , userPassword } = action.payload

          let usrFind =  state.find( (obj) => (obj.userName === userNameorEmail || obj.userGmail === userNameorEmail) && obj.userPassword === userPassword   );
        //   console.log(userNameorEmail , userPassword)
        console.log('userFind the print it',usrFind)

            // if(!usrFind){
            //     return 'Invalid User Account'
            // }else{
            //     return {
            //         ...usrFind,
            //         isLogIn : true
            //     }
            // }
        }

    },
})

export const {createUsrAcc, userLogin} = userAccount.actions
export default userAccount.reducer