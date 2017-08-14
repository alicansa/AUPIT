import debounce from 'lodash.debounce';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { persistStore, autoRehydrate } from 'redux-persist';
import { create, getStore } from '../store';
import { tests, errors } from '../reducers';

create(
	{
		tests,
		errors
	},
	// Sets the initial state to load from storage
	autoRehydrate(),
	// Groups multiple actions raised together into a single render cycle
	batchedSubscribe(debounce(notify => notify())));

persistStore(
	getStore(),
	{
		blacklist: ['error']
	});