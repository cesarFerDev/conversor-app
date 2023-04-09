import { createSlice } from "@reduxjs/toolkit";


export const SavedData = createSlice({
    name: 'savedData',
    initialState: {elements: []},
    reducers: {
        addElement: (state, action) => {
            state.elements.push(action.payload);
        },
        removeElement: (state, action) => {
            let aux = [];
            for (let i=0; i < state.length; i++) {
                if (state.elements[i].mainValue === action.payload.mainValue &&
                    state.elements[i].mainUnit === action.payload.mainUnit &&
                    state.elements[i].convertedValue === action.payload.convertedValue &&
                    state.elements[i].convertedUnit === action.payload.convertedUnit) {
                    } else {
                        aux.push(state[i]);
                    };
            }
            state.elements = aux;
        }
    }
});

export const {addElement, removeElement} = SavedData.actions;