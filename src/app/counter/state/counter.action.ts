//step-2
//In NgRx, actions are plain JavaScript objects that represent unique events or occurrences in your application.
// Actions are dispatched to the store to describe changes that should be made to the state.
// Actions are the primary way to communicate intentions within your NgRx application.

import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Count] increment', props<{ counterData: number }>());
export const decrement = createAction('[Count] decrement', props<{ counterData: number }>());
export const reset = createAction('[Count] reset', props<{ counterData: number }>());

console.log(`Action created: ${increment.type}`);
console.log(`Action created: ${decrement.type}`);
console.log(`Action created: ${reset.type}`);