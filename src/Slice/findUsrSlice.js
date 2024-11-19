import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";

// let [usrAccount , setUsrAccount] = useState({})
let initialState = {
    userName : 'Abrar Khan',
    userGmail : 'abrar0349khan@gmail.com',
    userPassword : 'khan',
    userCheckOut : [],
    isLogIn : false,
    // {productAmount : Number(1)}
}

let usrFinded = createSlice({
    name : 'usrAccount',
    initialState,
    reducers :  { 
        userLoginInAccount : (state , action) => {
            // state = state
            return {
                ...action.payload,
                userCheckOut: state.userCheckOut.map((obj) => obj)
            }
        },
        userLogoutAccount : (state , action) => {
            // state = state
            return action.payload
        },
        userAddToCard: (state , action) => {
                state.userCheckOut.push(action.payload)
                // return action.payload
    
        },
        productIncreament : (state , action) =>{
            const {count , condition1} = action.payload
           state.userCheckOut.forEach( (obj) => {
            if(obj.cardId === condition1){
                obj.productAmount = count
                // console.log(state)
            }
           })
            
        }
    } 

})

// console.log('findUsrSlice in file',initialState)

export const {userLoginInAccount , userLogoutAccount , userAddToCard , productIncreament} = usrFinded.actions
export default usrFinded.reducer