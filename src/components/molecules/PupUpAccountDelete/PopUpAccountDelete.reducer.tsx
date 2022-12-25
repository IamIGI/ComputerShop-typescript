import { ChangeEvent, KeyboardEvent } from 'react';

export const INITIAL_STATE = {
    input: {
        pwd1: '',
        pwd2: '',
    },
    focus: {
        pwd1: '',
        pwd2: '',
    },
    isCapsLock: false,
};

export const ACTIONS = {
    INPUT: 'input',
    FOCUS: 'focus',
    CAPS_LOCK: 'isCapsLock',
};

interface PayloadInputInterface {
    name: string;
    value: string;
}

interface PayloadFocusInterface {
    name: string;
    value: boolean;
}

interface ReducerAction {
    type: string;
    payload?:
        | PayloadInputInterface
        | PayloadFocusInterface
        | KeyboardEvent<HTMLInputElement>
        | ChangeEvent<HTMLInputElement>;
}

export const popUpAccountDeleteReducer = (state: typeof INITIAL_STATE, action: ReducerAction): typeof INITIAL_STATE => {
    switch (action.type) {
        case ACTIONS.INPUT:
            return {
                ...state,
                input: {
                    ...state.input,
                    [(action.payload as PayloadInputInterface).name]: (action.payload as PayloadInputInterface).value,
                },
            };
        case ACTIONS.FOCUS:
            return {
                ...state,
                focus: {
                    ...state.focus,
                    [(action.payload as PayloadFocusInterface).name]: (action.payload as PayloadFocusInterface).value,
                },
            };
        case ACTIONS.CAPS_LOCK:
            return {
                ...state,
                isCapsLock: (action.payload as KeyboardEvent<HTMLInputElement>).getModifierState('CapsLock'),
            };
        default:
            return state;
    }
};
