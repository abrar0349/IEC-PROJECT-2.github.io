import { createSlice } from "@reduxjs/toolkit";

let initialState =[{
    userName : 'Abrar Khan',
    userGmail : 'abrar0349khan@gmail.com',
    userPassword : 'khan',
    userCheckOut : []
}]
let userAccount = createSlice({
    name :'userAccount',
    initialState,
     reducers :{

    },
})

export const {} = userAccount.actions
export default userAccount.reducer