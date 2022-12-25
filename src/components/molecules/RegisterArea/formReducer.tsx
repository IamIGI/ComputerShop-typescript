import { testEmailRegex, testNameRegex, testPasswordRegex } from 'data/Regex';
import { KeyboardEvent } from 'react';

interface PayloadObjectStringInterface {
    name: string;
    value: string;
}

interface PayloadObjectNumberInterface {
    name: string;
    value: number;
}

interface PayloadObjectBooleanInterface {
    name: string;
    value: boolean;
}

interface PayloadObjectMatchPwdInterface {
    pwd: string;
    matchPwd: string;
}

interface ReducerAction {
    type: string;
    payload?:
        | string
        | boolean
        | PayloadObjectStringInterface
        | PayloadObjectNumberInterface
        | PayloadObjectBooleanInterface
        | PayloadObjectMatchPwdInterface
        | KeyboardEvent<HTMLInputElement>;
}

export const ACTIONS = {
    VALID: {
        NAME: 'validName',
        EMAIL: 'validEmail',
        PWD: 'validPwd',
        MATCH_PWD: 'validMatchPwd',
    },
    FOCUS: 'focus',
    CHECK_CAPS_LOCK: 'checkCapsLock',
    ERROR_MESSAGE: 'errMsg',
    WAIT_FOR_REGISTER: 'waitForRegister',
};

export const INITIAL_STATE = {
    valid: {
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
        matchPwd: false,
    },
    focus: {
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
        matchPwd: false,
    },
    capsLock: false,
    errMsg: '',
    waitForRegister: false,
};

export const formReducer = (state: typeof INITIAL_STATE, action: ReducerAction): typeof INITIAL_STATE => {
    switch (action.type) {
        case ACTIONS.VALID.NAME:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    [(action.payload as PayloadObjectStringInterface).name]: testNameRegex(
                        (action.payload as PayloadObjectStringInterface).value
                    ),
                },
            };
        case ACTIONS.VALID.EMAIL:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    email: testEmailRegex(action.payload as string),
                },
            };
        case ACTIONS.VALID.PWD:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    pwd: testPasswordRegex(action.payload as string),
                },
            };
        case ACTIONS.VALID.MATCH_PWD:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    matchPwd:
                        (action.payload as PayloadObjectMatchPwdInterface).pwd ===
                        (action.payload as PayloadObjectMatchPwdInterface).matchPwd,
                },
            };
        //focus
        case ACTIONS.FOCUS:
            return {
                ...state,
                focus: {
                    ...state.focus,
                    [(action.payload as PayloadObjectBooleanInterface).name]: (
                        action.payload as PayloadObjectBooleanInterface
                    ).value,
                },
            };
        //caps lock
        case ACTIONS.CHECK_CAPS_LOCK:
            if ((action.payload as KeyboardEvent).getModifierState('CapsLock')) {
                return {
                    ...state,
                    capsLock: true,
                };
            }
            return {
                ...state,
                capsLock: false,
            };
        //error Message
        case ACTIONS.ERROR_MESSAGE:
            return {
                ...state,
                errMsg: action.payload as string,
            };

        case ACTIONS.WAIT_FOR_REGISTER:
            return {
                ...state,
                waitForRegister: action.payload as boolean,
            };
        default:
            return state;
    }
};
