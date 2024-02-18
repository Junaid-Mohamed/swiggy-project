import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            // mutating the state over here.
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            // you should write logic to get that item and then delete
            // as of now the last item is being removed.
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0; // []
        }
    }
})

// createSlice takes in a set of args,
// 1.name of slice. 2. initial state of the slice.
// 3/ set of functions called reducers that make changes to the slice.
//  you'll export your actions and reducers.

// react redux gives us this template of how you have to export actions.
export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;