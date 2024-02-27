import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";
 const store =configureStore({
    reducer:{
        users:userSlice.reducer 
    }
 })
//  console.log(store)
export type RootState = ReturnType<typeof store.getState>
 export default store