import { configureStore } from "@reduxjs/toolkit";
import arrOfCardReducer from '../Slice/CardSlice'
import arrOfCard2Reducer from '../Slice/CardSlice2'
import userAccountReducer from '../Slice/userSlice'
import usrAccountReducer from '../Slice/findUsrSlice'
// Reducer
const store = configureStore({
    reducer :{
        Card : arrOfCardReducer,
        Card2 : arrOfCard2Reducer,
        userAccount : userAccountReducer,
        setUsrInAccount : usrAccountReducer,
    },
})

export default store