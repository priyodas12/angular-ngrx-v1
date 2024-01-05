//step-2
//In NgRx, actions are plain JavaScript objects that represent unique events or occurrences in your application.
// Actions are dispatched to the store to describe changes that should be made to the state.
// Actions are the primary way to communicate intentions within your NgRx application.

import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction('[Count] increment', props<{ counterData: number }>());
export const decrementAction = createAction('[Count] decrement', props<{ counterData: number }>());
export const resetAction = createAction('[Count] reset', props<{ counterData: number }>());
export const customIncrementAction = createAction('customIncrementAction', props<{ customCounterData: number }>());

console.log(`Action created: ${incrementAction.type}`);
console.log(`Action created: ${decrementAction.type}`);
console.log(`Action created: ${resetAction.type}`);