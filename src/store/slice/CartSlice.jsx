import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [],
  },
  reducers: {
    add: (state, action) => {
      let isSame = false;
      state.products.map((product)=>{
        if(product.id===action.payload.id){
          isSame = true;
          return {...product, quantity: product.quantity++};
        }
        return product;
      });

      if(!isSame) {
        state.products.unshift(action.payload);
      }

    },

    remove: (state, action) => {
      const newProducts = state.products.filter((product) => product.id!==action.payload);
      
      return {...state, products: newProducts};
    },

    plus: (state, action) => {
      state.products.map((product)=>{
        if(product.id===action.payload){
          return {...product, quantity: product.quantity++};
        }
        return product;
      });
    },

    minus: (state, action) => {
      state.products.map((product)=>{
        if(product.id===action.payload && product.quantity > product.minimumOrderQuantity){
          return {...product, quantity: product.quantity--};
        }
        return product;
      });
    },

    removeAll: (state) => {
      state.products.length = 0;
    },
  }
})

export const { add, remove, plus, minus, removeAll } = CartSlice.actions;

export default CartSlice.reducer;