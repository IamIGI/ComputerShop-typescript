import { testEmailRegex } from 'data/Regex';

export const MESSAGE_OPTIONS = [
    { label: 'Błąd', value: 0, checked: false },
    { label: 'Współpraca', value: 1, checked: false },
];

export const ACTIONS = {
    INPUT: 'input',
    FILES: 'files',
    MESSAGE_CATEGORY: 'messageCategory',
    VALID_EMAIL: 'validEmail',
    ERROR: 'error',
    SUCCESS: 'success',
    FOCUS: 'focus',
};

export const INITIAL_STATE = {
    input: {
        email: '',
        name: '',
        message: '',
    },
    messageCategory: 0,
    focus: {
        email: false,
        name: false,
        message: false,
    },
    validEmail: false,
    files: [],
    errMsg: [false, ''],
    success: false,
};

interface PayloadObjectInputInterface {
    name: string;
    value: string;
}

interface PayloadObjectFocusInterface {
    name: string;
    value: boolean;
}

interface ReducerAction {
    type: string;
    payload?:
        | string
        | number
        | boolean
        | FileList
        | PayloadObjectInputInterface
        | PayloadObjectFocusInterface
        | [boolean, string];
}

export const formReducer = (state: typeof INITIAL_STATE, action: ReducerAction): typeof INITIAL_STATE => {
    switch (action.type) {
        case ACTIONS.INPUT:
            return {
                ...state,
                input: {
                    ...state.input,
                    [(action.payload as PayloadObjectInputInterface).name]: (
                        action.payload as PayloadObjectInputInterface
                    ).value,
                },
            };
        case ACTIONS.MESSAGE_CATEGORY:
            return {
                ...state,
                messageCategory: action.payload as number,
            };
        case ACTIONS.FOCUS:
            return {
                ...state,
                focus: {
                    ...state.focus,
                    [(action.payload as PayloadObjectFocusInterface).name]: (
                        action.payload as PayloadObjectFocusInterface
                    ).value,
                },
            };
        case ACTIONS.VALID_EMAIL:
            return {
                ...state,
                validEmail: testEmailRegex(action.payload as string),
            };
        case ACTIONS.FILES:
            return {
                ...state,
                //@ts-ignore
                files: action.payload,
            };

        case ACTIONS.ERROR:
            return {
                ...state,
                errMsg: action.payload as [boolean, string],
            };

        case ACTIONS.SUCCESS:
            return {
                ...state,
                success: action.payload as boolean,
            };
        default:
            return state;
    }
};
