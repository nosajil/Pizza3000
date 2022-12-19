import pizzas from "../pizzas";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    orders: [
        {
            id: Date.now(),
            pizzas: [],
            complete: false
        }
    ]
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.orders.push({
                id: payload,
                pizzas: [],
                complete: false
            })
        }
    }
});

export const { add, addPizza, remove, } = dataSlice.actions;

export default dataSlice.reducer;
