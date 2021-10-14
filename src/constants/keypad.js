import {
    numberKey,
    operatorKey,
    clearKey,
    equalKey
} from './constants';

const keypad = [
    [{
        value: '1',
        type: numberKey
    }, {
        value: '2',
        type: numberKey
    }, {
        value: '3',
        type: numberKey
    }, {
        value: '+',
        type: operatorKey,
    }],
    [{
        value: '4',
        type: numberKey
    }, {
        value: '5',
        type: numberKey
    }, {
        value: '6',
        type: numberKey
    }, {
        value: '-',
        type: operatorKey,
    }],
    [{
        value: '7',
        type: numberKey
    }, {
        value: '8',
        type: numberKey
    }, {
        value: '9',
        type: numberKey
    }, {
        value: '*',
        type: operatorKey,
    }],
    [{
        value: '0',
        type: numberKey
    }, {
        value: '.',
        type: numberKey
    }, {
        value: '=',
        type: equalKey,
    }, {
        value: '/',
        type: operatorKey,
    }],
    [{
        value: 'Очистить',
        type: clearKey,
    }]
]

export default keypad;