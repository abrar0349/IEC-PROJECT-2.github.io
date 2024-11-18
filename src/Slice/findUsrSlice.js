import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";

// let [usrAccount , setUsrAccount] = useState({})
let initialState = {
    userName : 'Abrar Khan',
    userGmail : 'abrar0349khan@gmail.com',
    userPassword : 'khan',
    userCheckOut : [],
    isLogIn : false
}

let usrFinded = createSlice({
    name : 'usrAccount',
    initialState,
    reducers :  { 
        userLoginInAccount : (state , action) => {
            return action.payload
        },
        userLogoutAccount : (state , action) => {
            return action.payload
        },
        userAddToCard: (state , action) => {
                state.userCheckOut.push(action.payload)
                // return action.payload
    
        }
    } 

})

// console.log('findUsrSlice in file',initialState)

export const {userLoginInAccount , userLogoutAccount , userAddToCard} = usrFinded.actions
export default usrFinded.reducer