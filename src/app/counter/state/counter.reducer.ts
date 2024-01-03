//step-3
// In NgRx, a reducer is a pure function that specifies how the state of your application changes in
// response to dispatched actions.The reducer takes the current state and an action as arguments and
// returns a new state.The state in NgRx is immutable, so instead of modifying the existing state,
// the reducer creates a new state object based on the previous state and the action.


import { decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state"
import { createReducer, on } from "@ngrx/store";

export const counterReducer = createReducer(initialState,
    on(
        increment,//action name
        (state) => {
            return {
                ...state,
                countValue: state.countValue + 1,
            }
        }),
    on(
        decrement,//action name
        (state) => {
            return {
                ...state,
                countValue: state.countValue - 1
            }
        }
    ),
    on(
        reset,//action name
        (state) => {
            return {
                ...state,
                countValue: 0
            }
        }
    )
);
