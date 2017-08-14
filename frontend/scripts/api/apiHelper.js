// import jwtDecode from 'jwt-decode';
// import { setTokens } from '../actions';
//import { getStore } from '../store';
// import { refreshTokens } from './auth';

let settings = {};
//let tokenGetterPromise = null;

const ApiBaseUrl = '' ;

// function getToken() {
// 	if (tokenGetterPromise) {
// 		return tokenGetterPromise;
// 	}

// 	let tokens = getStore().getState().token;

// 	if (tokens.session) {
// 		let date = new Date(0);
// 		let expiry = jwtDecode(tokens.session).exp;
// 		if (!expiry) {
// 			return Promise.resolve(tokens.session);
// 		}
// 		date.setSeconds(expiry + 60);
// 		if (date > new Date()) {
// 			return Promise.resolve(tokens.session);
// 		}
// 	}

// 	if (!tokens.refresh) {
// 		throw 'No refresh token provided';
// 	}

// 	tokenGetterPromise = refreshTokens(tokens.refresh).then(t => {
// 		tokenGetterPromise = null;
// 		return t;
// 	}).catch(error => {
// 		setTokens();
// 		tokenGetterPromise = null;
// 		throw error;
// 	});

// 	return tokenGetterPromise;
// }

export function init(url, cert) {
	//this should be called everytime a test suite is changed
	settings.url = url;
	settings.cert = cert;
}

export function getHeaders(token) {
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	};

	// if (token === undefined) {
	// 	return getToken().then(t => {
	// 		headers.Authorization = `Bearer ${t}`;
	// 		return headers;
	// 	});
	// }

	// if (token) {
	// 	headers.Authorization = `Bearer ${token}`;
	// }

	return Promise.resolve(headers);
}

export function getUrl() {
	return settings.url;
}

function makeCallWithSsl(relativeUrl, method, body, headers) {
	// return pinch.fetch(`${settings.url}/${relativeUrl}`, {
	// 	headers: headers,
	// 	method: method,
	// 	json: true,
	// 	body: JSON.stringify(body),
	// 	sslPinning: {
	// 		cert: settings.cert
	// 	}
	// }).then(response => {
	// 	let result = response.bodyString ? JSON.parse(response.bodyString) : response.bodyString;
	// 	return response.status >= 200 && response.status < 300 ? result : Promise.reject(result);
	// });
}

function makeCallWithoutSsl(relativeUrl, method, body, headers) {
	
}

export function makeApiCall(relativeUrl, method = 'GET', body = undefined, headers){
	//calls made to the api under testing
	if (!settings.url) {
		throw 'No url has been set';
	}

	makeCall(`${settings.url}/${relativeUrl}`, method, body, headers);
}

export function makeServerCall(){
	//calls made to our server
	getHeaders().then(headers => makeCall(url, method, body, headers));
}

function makeCall(url, method, body, headers) {
	return fetch(`${url}`, {
		headers: headers,
		method: method,
		json: true,
		body: JSON.stringify(body)
	}).then(response => {
		let result = response.text().then(text => text ? JSON.parse(text) : text);
		return response.ok ? result : result.then(Promise.reject);
	});
}