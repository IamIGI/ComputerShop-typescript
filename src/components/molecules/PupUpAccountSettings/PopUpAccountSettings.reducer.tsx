import { testEmailRegex, testNameRegex, testPasswordRegex } from 'data/Regex';
import { KeyboardEvent } from 'react';

export const INITIAL_STATE = {
    input: {
        password: '',
        editedField: '',
        repeatPassword: '',
    },
    validEditedField: false,
    focus: {
        password: false,
        editedField: false,
        repeatPassword: false,
    },
    isCapsLock: false,
    badPassword: false,
};

export const ACTIONS = {
    INPUT: 'input',
    VALID_EDITED_FIELD: 'valid',
    FOCUS: 'focus',
    CAPS_LOCK: 'isCapsLock',
    BAD_PASSWORD: 'badPassword',
};

interface InputActionInterface {
    name: string;
    value: string;
}

interface FocusActionInterface {
    name: string;
    value: boolean;
}

interface ValidEditedFieldActionInterface {
    name: string;
    value: string;
}

interface ReducerAction {
    type: string;
    payload?:
        | InputActionInterface
        | FocusActionInterface
        | ValidEditedFieldActionInterface
        | KeyboardEvent<HTMLInputElement>
        | boolean;
}

export const popUpAccountSettingsReducer = (
    state: typeof INITIAL_STATE,
    action: ReducerAction
): typeof INITIAL_STATE => {
    switch (action.type) {
        case ACTIONS.INPUT:
            return {
                ...state,
                input: {
                    ...state.input,
                    [(action.payload as InputActionInterface).name]: (action.payload as InputActionInterface).value,
                },
            };
        case ACTIONS.FOCUS:
            return {
                ...state,
                focus: {
                    ...state.focus,
                    [(action.payload as FocusActionInterface).name]: (action.payload as FocusActionInterface).value,
                },
            };
        case ACTIONS.VALID_EDITED_FIELD:
            let isFieldValid = false;
            switch ((action.payload as ValidEditedFieldActionInterface).name) {
                case 'email':
                    isFieldValid = testEmailRegex((action.payload as ValidEditedFieldActionInterface).value);
                    break;
                case 'hashedPassword':
                    isFieldValid = testPasswordRegex((action.payload as ValidEditedFieldActionInterface).value);
                    break;
                case 'firstName':
                    isFieldValid = testNameRegex((action.payload as ValidEditedFieldActionInterface).value);
                    break;
                case 'lastName':
                    isFieldValid = testNameRegex((action.payload as ValidEditedFieldActionInterface).value);
                    break;
                default:
                    console.log('given name is not supported ');
                    break;
            }
            return {
                ...state,
                validEditedField: isFieldValid,
            };
        case ACTIONS.CAPS_LOCK:
            return {
                ...state,
                isCapsLock: (action.payload as KeyboardEvent<HTMLInputElement>).getModifierState('CapsLock'),
            };
        case ACTIONS.BAD_PASSWORD:
            return {
                ...state,
                badPassword: action.payload as boolean,
            };
        default:
            return state;
    }
};
