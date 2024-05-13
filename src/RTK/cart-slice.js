import { createSlice } from "@reduxjs/toolkit";

const productsincart = localStorage.getItem('cartItems');

export const cartslice = createSlice({
    initialState: productsincart ? JSON.parse(productsincart) : [],
    name: "cartslice",
    reducers: {
        addtocart: (state, action) => {
            const findproduct = state.find((product) => product.id === action.payload.id);
            if (findproduct) {
                findproduct.quantity += 1;
            }
            else {
                const productclone = { ...action.payload, quantity: 1 }
                state.push(productclone);
            }
           localStorage.setItem('cartItems', JSON.stringify(state));
        },
        incrementquantity: (state, action) => {
            const findproduct = state.find((product) => product.id === action.payload.id);
            if (findproduct) {
                findproduct.quantity += 1;
            }
          localStorage.setItem('cartItems', JSON.stringify(state));
        },
        decrementquantity: (state, action) => {
            const findproduct = state.find((product) => product.id === action.payload.id);
            if (findproduct) {
                if (findproduct.quantity > 0) {
                    findproduct.quantity -= 1;
                }
                else {
                    findproduct.quantity = 0;
                }
            }
             localStorage.setItem('cartItems', JSON.stringify(state));
        },
        deletefromcart: (state, action) => {  
            const cartafterdelete =  state.filter((product) => product.id != action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(cartafterdelete));
            return cartafterdelete

        },
        clear: (state, action) => {
           localStorage.setItem('cartItems',[]);
            return []
          
        }
    }
})

export const { addtocart, deletefromcart, clear, incrementquantity, decrementquantity } = cartslice.actions;
export default cartslice.reducer;