import { createSlice } from "@reduxjs/toolkit";


export const SavedData = createSlice({
    name: 'savedData',
    initialState: [],
    reducers: {
        addElement: (state, action) => {
            state.push(action.payload);
        },
        removeElement: (state, action) => {
            let aux = [];
            for (let i=0; i < state.length; i++) {
                if (state[i].mainValue === action.payload.mainValue &&
                    state[i].mainUnit === action.payload.mainUnit &&
                    state[i].convertedValue === action.payload.convertedValue &&
                    state[i].convertedUnit === action.payload.convertedUnit) {

                    } else {
                        aux.push(state[i]);
                    };
            }
            state = aux;
        }
    }
});

export const {addElement, removeElement} = SavedData.actions;