import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInstance, saveToken } from "../utility/api";


export const login=createAsyncThunk("authSlice/login",
   async (user)=>{
     try {
      let { data } = await apiInstance.post("/Account/login",user)
       saveToken(data.data)
       return data.data 
    } catch (error) {
      console.error(error);
    }
   }
   
)


export const registration=createAsyncThunk("authSlice/registration",
   async (user)=>{
     try {
      let { data } = await apiInstance.post("/Account/register",user)
       return data.data 
    } catch (error) {
      console.error(error);
    }
   }
)

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    value: 0,
    cart: [],
  },
  reducers: {},
 
});

export const {} = authSlice.actions;

export default authSlice.reducer;
