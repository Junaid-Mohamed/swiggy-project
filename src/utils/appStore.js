import { configureStore } from "@reduxjs/toolkit";
// configuring the store is Redux job so importing from redux.
import cartReducer from "./cartSlice";


// shopuld add slices inside it.
const appStore = configureStore({
    //  this is the whole reducer of the applcation,
    // the other reducer was the slice of the whole reducer
    reducer:{
        cart:cartReducer,
        // if you have another reducer of th eapplication we will keep n adding it here.
        //  ex: userReducer.
    }
});

export default appStore;