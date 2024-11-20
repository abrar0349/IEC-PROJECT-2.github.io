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
            if(state.userCheckOut.length === 0){
                state.userCheckOut.push(action.payload)
            }else{
                // state.userCheckOut.filter( (obj) => {
                //     console.log('outer else part of if',obj.cardId , action.payload.cardId)
                let findobj = state.userCheckOut.find( (obj) => obj.cardId === action.payload.cardId)
                // console.log('findob value', findobj)
                if(!findobj){
                    // console.log('inner if condition', action.payload.cardId)
                    state.userCheckOut.push(action.payload)
                    console.log(action.payload)
                }
                // })
            }
        
        },

        userRemoverToCard : (state , action) => {
            state.userCheckOut.splice(action.payload , 1)
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


export const {userLoginInAccount , userLogoutAccount , userAddToCard , productIncreament , userRemoverToCard} = usrFinded.actions
export default usrFinded.reducer