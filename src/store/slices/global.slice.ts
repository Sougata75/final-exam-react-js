import { ProductType } from "@/typescript/interface/Interface"
import { createSlice } from "@reduxjs/toolkit"
import { stat } from "fs";

export interface GlobalStateType {
    cartItems: ProductType [];
    searchData: string;
}

export const initialState: GlobalStateType = {
    cartItems: [],
    searchData: "",
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        cartAdd: (state,actions) => {
            state.cartItems = [...state.cartItems, actions.payload]
            console.log("action data" , actions.payload)
        },
        cartDelete: (state,actions) => {
            state.cartItems.splice(actions.payload,1);
        },
        searchFunc: (state, actions) => {
            state.searchData = actions.payload;
        }
    },
    extraReducers(builder) {
        builder
    },
});

export const {
cartAdd,
cartDelete,
searchFunc,
} = globalSlice.actions;
export default globalSlice.reducer;