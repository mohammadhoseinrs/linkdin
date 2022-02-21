import { createSlice } from "@reduxjs/toolkit";


const initialState={
        list:localStorage.getItem('linkdin') ? JSON.parse(localStorage.getItem('linkdin')) : [] ,
}

export const linkSlice=createSlice({
        name:'Linkdin',
        initialState,
        reducers:{
                addtopost:(state,action)=>{
                        state.list.unshift(action.payload)
                        localStorage.setItem('linkdin',JSON.stringify(state.list))
                }
        }
})

export const {addtopost}=linkSlice.actions
export default linkSlice.reducer
