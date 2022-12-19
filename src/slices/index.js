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
                id: Date.now(),
                pizzas: pizzas.push(payload),
                complete: false
            })
        },
    }
});

export const { add, complete, remove } = dataSlice.actions;

export default dataSlice.reducer;
