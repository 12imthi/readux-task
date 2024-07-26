import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://picsum.photos/200/300?random=1",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
        quantity: 1,
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://picsum.photos/200/300?random=2",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
        quantity: 1,
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://picsum.photos/200/300?random=3",
        images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
        quantity: 1,
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://picsum.photos/200/300?random=4",
        images: [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        ],
        quantity: 1,
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://picsum.photos/200/300?random=5",
        images: [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg",
        ],
        quantity: 1,
      },
    ],
    totalQuantity: 0,
    totalAmount: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    fetchProductStart: (state) => {
      state.status = "loading";
    },
    fetchProductSuccess: (state, action) => {
      state.status = "Success";
      state.data = action.payload;
    },
    fetchProductFailure: (state, action) => {
      state.status = "Failure";
      state.error = action.payload;
    },
    increaseQuantity: (state, action) => {
        const product = state.data.find((item) => item.id === action.payload);
        if (product && product.quantity < product.stock) {
          product.quantity += 1;
          state.totalQuantity += 1;
          state.totalAmount += product.price;
        }
      },
      decreaseQuantity: (state, action) => {
        const product = state.data.find((item) => item.id === action.payload);
        if (product && product.quantity > 1) {
          product.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalAmount -= product.price;
        }
      },
      updateTotals: (state) => {
        // state.totalQuantity = state.data.reduce((total, item) => total + item.quantity, 0);
        // state.totalAmount = state.data.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    },
  });
  
  export const {
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFailure,
    increaseQuantity,
    decreaseQuantity,
    updateTotals,
  } = productSlice.actions;
export default productSlice.reducer;
