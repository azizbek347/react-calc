import { operatorKey, numberKey, clearKey, equalKey, operations } from '../constants';
import { evaluate, round } from 'mathjs';
import { removeSpareDot, clearSpareOperator, checkForZeroOrInfinity } from '../utils/mathUtils';

const reducer = (state = '0', action) => {
    const { type, payload: { value } = {} } = action;
    switch (type) {
        case numberKey: {
            let newState = checkForZeroOrInfinity(state) ? value : `${state}${value}`;
            newState = removeSpareDot(newState);
            return newState;
        }
        case operatorKey: {
            const lastTyped = state.slice(-1);
            const newState = operations.includes(lastTyped) ? `${state.slice(0, -1)}${value}` : `${state}${value}`;
            return newState;
        }
        case equalKey: return round(evaluate(clearSpareOperator(state)), 2).toString();
        case clearKey: return `0`;
        default: return state;
    }
};

export default reducer;