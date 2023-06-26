import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1' , name:'john' , email:"uakk@101"},
    {id:'1' , name:'john' , email:"uakk@101"},
    {id:'1' , name:'john' , email:"uakk@101"},
];
  
const userSlice = createSlice({ 
    name:'user',
    initialState,
    reducers:{
        addUser(state , action){
            console.log(action);
            state.push(action.payload);
        }
    }

})
export const {addUser} = userSlice.actions;
export default userSlice.reducer;
