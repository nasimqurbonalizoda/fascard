import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utility/api";

export const getProduct = createAsyncThunk("product/getProduct", async function () {
  try {
    let { data } = await axiosRequest.get("/Product/get-products");
    console.log(data.data);
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
});
export const getProductById = createAsyncThunk("product/getProductbyid", async function (id) {
  try {
    let { data } = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`);
    console.log(data.data);
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
});
export const ProductSlice = createSlice({
  name: "ProductSlice2",
  initialState: {
    value: 0,
    product: [],
        text: "",

  },
  reducers: {
    setSearch(state, action) {
      state.text = action.payload;
    }
  },
  extraReducers: (builder) => {
   builder.addCase(getProduct.fulfilled, (state, action) => {
  state.product = action.payload;
}),
   builder.addCase(getProductById.fulfilled, (state, action) => {
  state.product = action.payload;
});
  },
});

export const {setSearch} = ProductSlice.actions;

export default ProductSlice.reducer;



