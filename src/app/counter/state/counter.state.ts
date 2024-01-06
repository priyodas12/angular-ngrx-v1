//step-1
//Create initial state object:the term "state" refers to the overall data structure that
//represents the state of your application at a specific point in time.
//The state is managed centrally in the store, and it is typically an immutable object tree.
export interface CounterState {
    countValue: number;
    countText: string;
}
export const initialState: CounterState = {
    countValue: 0,
    countText: 'test'
}