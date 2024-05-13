import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk("Productslice/fetchproducts" , async () => {
    const res = await fetch("https://json-server-for-cart-app-repositry.onrender.com/products");// local url is http://localhost:9000/products  
    const data = await res.json();
    return data; 
})

const Productslice = createSlice({
    initialState: [],
    name : "Productslice",
    reducers : {},
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.fulfilled ,(state,action) => {
            return action.payload;
        })
    }
})

export const {} = Productslice.actions;

export default Productslice.reducer;