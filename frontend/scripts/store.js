import { combineReducers, createStore } from 'redux';

let store;

export function create(reducers, initialState, enhancer){
	store = createStore(
		combineReducers(reducers),
		initialState,
		enhancer);
}

export function getStore() {
	return store;
}