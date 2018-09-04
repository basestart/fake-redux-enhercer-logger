module.exports = function loggerEnhencer (createStore) {
	return function (reducer, initState) {
		let store = createStore(reducer, initState);
		function dispatch (action) {
			console.log(`dispatching an action : ${JSON.stringify(action)}`);
			const res = store.dispatch(action);
			const newState = store.getState();
			console.log(`current state : ${JSON.stringify(newState)}`);
			return res;
		}
		return {
			...store,
			dispatch
		}
	}
}