import { ActionTypes } from '../actions';

export function errors(state, action) {
	if (state === undefined) {
		return {};
	}

	// switch (action.type) {
	// 	case ActionTypes.SET_POLICY_RISK: {
	// 		let drivers = findParts(action.risk, 101392).map(p => ({
	// 			partRef: p.partRef,
	// 			parentPartRef: p.parentPartRef,
	// 			convictions: findQuestion(p, 749047).value,
	// 			dateOfBirth: findQuestion(p, 749051).value,
	// 			firstName: findQuestion(p, 749061).value,
	// 			lastName: findQuestion(p, 749062).value,
	// 			licenseClass: findQuestion(p, 749053).value,
	// 			title: findQuestion(p, 749048).value,
	// 			vehicles: findQuestion(p, 749069).value,
	// 			yearLicenseObtained: findQuestion(p, 749059).value
	// 		}));
	// 		return Object.assign(
	// 			{},
	// 			state,
	// 			drivers.reduce((o, d) => {
	// 				o[d.partRef] = d;
	// 				return o;
	// 			}, {}));
	// 	}
	// 	case ActionTypes.SIGNOUT:
	// 		return {};
	// }

	return state;
}