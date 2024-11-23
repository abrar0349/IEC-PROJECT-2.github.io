import { createSlice } from "@reduxjs/toolkit";

let initialState =[{
    userName : 'Abrar Khan',
    userGmail : 'abrar0349khan@gmail.com',
    userPassword : 'khan',
    userCheckOut : [],
    isLogIn : false
}]
console.log(initialState)
let userAccount = createSlice({
    name :'userAccount',
    initialState,
     reducers :{
        createUsrAcc : (state, action) => {

            state.push(action.payload)

        },
        // userLogin : (state , action) => {

        //     let {userNameorEmail , userPassword } = action.payload

        //   let usrFind =  state.find( (obj) => (obj.userName === userNameorEmail || obj.userGmail === userNameorEmail) && obj.userPassword === userPassword   );
        
        // }

    },
})

export const {createUsrAcc, userLogin} = userAccount.actions
export default userAccount.reducer