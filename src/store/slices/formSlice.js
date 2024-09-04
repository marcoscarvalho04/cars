import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";
const formSlice = createSlice({
    name: "formSlice",
    initialState: {
        name: '',
        cost: 0.0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload; 
        },
        changeCost(state, action) {
            state.cost = action.payload;

        }
    }, extraReducers(builder) {
        builder.addCase(addCar, (action, state) => {
            state.name = '';
            state.cost = 0; 
        })
    }
})

export const {changeCost, changeName} = formSlice.actions; 
export const formReducer = formSlice.reducer;