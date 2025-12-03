import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utility/api";

export const getCarter = createAsyncThunk("cartSlices/getCarter", async function () {
  try {
    let { data } = await axiosRequest.get("/Product/get-products");
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const cartSlices = createSlice({
  name: "cartSlices",
  initialState: {
    value: 0,
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarter.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const {} = cartSlices.actions;

export default cartSlices.reducer;
