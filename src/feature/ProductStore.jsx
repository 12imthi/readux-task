import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";


export const productStore = configureStore({
    reducer: {
        products : ProductSlice
    }
})

export default productStore