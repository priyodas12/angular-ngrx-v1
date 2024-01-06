import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

//get selector for counterData defined in module registration.
const getCounterState = createFeatureSelector<CounterState>('counterData');

export const getCounterValue = createSelector(getCounterState, state => {
    return state.countValue;
})

export const getCounterText = createSelector(getCounterState, state => {
    return state.countText;
})