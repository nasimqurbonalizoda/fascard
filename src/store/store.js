import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../reducers/product'
import cartSlice from '../reducers/cart'
import  cartSlices  from '../reducers/wishlist'

export const store = configureStore({
  reducer: {
    ProductSlice2:ProductSlice,
    cartSlice:cartSlice,
    cartSlices:cartSlices,
  },
})  