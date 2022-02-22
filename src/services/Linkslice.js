import { createSlice } from "@reduxjs/toolkit";


const initialState={
        list:localStorage.getItem('linkdin') ? JSON.parse(localStorage.getItem('linkdin')) : [] ,
        username:''
}

export const linkSlice=createSlice({
        name:'Linkdin',
        initialState,
        reducers:{
                addtopost:(state,action)=>{
                        state.list.unshift(action.payload)
                        localStorage.setItem('linkdin',JSON.stringify(state.list))
                },
                signin:(state,action)=>{
                        state.username=action.payload
                }
        }
})

export const {addtopost,signin}=linkSlice.actions
export default linkSlice.reducer
