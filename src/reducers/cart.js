import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utility/api";
export const getCart = createAsyncThunk("cartSlice/getCart", async function () {
  try {
    let { data } = await axiosRequest.get("/Cart/get-products-from-cart");
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});


export const AddCart = createAsyncThunk("cartSlice/addcart", async function (id) {
  try {
    let { data } = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`);
      getCart()
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const plus = createAsyncThunk("cartSlice/plus", async function (id,{dispatch}) {
  try {
      await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`);
      dispatch(getCart())
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
export const minus = createAsyncThunk("cartSlice/minus", async function (id,{dispatch}) {
  try {
      await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`);
      dispatch(getCart())
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

export const deleted = createAsyncThunk("cartSlice/deleted", async function (id,{dispatch}) {
  try {
      await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`);
      dispatch(getCart())
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
export const deleteded = createAsyncThunk("cartSlice/deleted", async function (_,{dispatch}) {
  try {
      await axiosRequest.delete(`/Cart/clear-cart`);
      dispatch(getCart())
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    value: 0,
    cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions;

export default cartSlice.reducer;
