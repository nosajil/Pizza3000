import pizzas from "../pizzas";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    pizzas,
    // orders: []
    orders: JSON.parse(localStorage.getItem('orders')) || []
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addOrder: (state, { payload }) => {
            const order = {
                id: payload,
                pizzas: {},
                total: 0,
                paid: false
            }
            localStorage.setItem('orders', JSON.stringify([...state.orders, order]));
            state.orders.push(order);
        },
        addPizzaOrder: (state, { payload }) => {
            const oid = payload.oid;
            const pid = payload.pid;

            const index = state.orders.findIndex(order => {
                return order.id === oid;
            });

            const currentOrder = { ...state.orders[index] };

            if (!currentOrder.pizzas[pid]) {
                currentOrder.pizzas[pid] = 1;
            } else {
                currentOrder.pizzas[pid]++;
            }

            currentOrder.total = Math.round((currentOrder.total + state.pizzas[pid].price) * 10) / 10;

            state.orders[index] = currentOrder;
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        deleteOrder: (state, { payload }) => {
            // const oid = payload.oid;

            // const index = state.orders.findIndex(order => {
            //     return order.id === oid;
            // });

            // const orderToDelete = { ...state.orders[index] };

            // state.orders[index] = orderToDelete;
            // state.orders.push(orderToDelete);
            state.todos.splice(payload, 1);




        }
    }
});

export const { addOrder, addPizzaOrder, deleteOrder } = dataSlice.actions;

export default dataSlice.reducer;
