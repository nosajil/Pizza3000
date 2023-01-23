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
<<<<<<< HEAD
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
    }
});

export const { addOrder, addPizzaOrder } = dataSlice.actions;
=======
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
>>>>>>> c8c75b3d761a9bf008d4e2f34de840e71f14a777

export default dataSlice.reducer;
