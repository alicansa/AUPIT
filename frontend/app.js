import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Rjv from 'react-json-view';
import { getStore } from './scripts/store.js';
import './scripts/utilities/storeCreator';

const sampleJsonObj = {
	test : 'test',
	test2 : {
		test3: 'test3'
	}
};

ReactDOM.render(
	<Provider store={getStore()}>
		<div>
			<Rjv 
				src={sampleJsonObj}
				enableClipboard={false}
				displayObjectSize={false}
				theme="monokai"
				onEdit={() =>{}}
				onAdd={() =>{}}/>
		</div>
	</Provider>,
	document.getElementById('app'));
