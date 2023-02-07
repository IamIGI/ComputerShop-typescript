export const ACTIONS = {
    RATING: 'rating',
    USER_NAME: 'userName',
    OPINION: 'opinion',
    FILES: 'files',
    FILES_ALERT: 'filesAlert',
    SEND_COMMENT: 'sendComment',
    ALERT: 'alert',
    COUNT_CHAR: 'countChar',
    LANGUAGE_VALIDATION: 'languageValidation',
    RESET: 'reset',
    CLEAR_ALERT: 'clearAlert',
};

interface InitialState {
    rating: number;
    userName: string;
    opinion: string;
    files: FileList | null;
    filesAlert: {
        showAlert: boolean;
        message: string;
    };
    sendComment: boolean;
    alert: {
        showAlert: boolean;
        userName: string;
        opinion: string;
        rating: string;
    };
    languageValidation: {
        showAlert: boolean;
        message: string;
    };
    countChar: number;
}

export const INITIAL_STATE: InitialState = {
    rating: 0,
    userName: '',
    opinion: '',
    files: null,
    filesAlert: { showAlert: false, message: '' },
    sendComment: false,
    alert: { showAlert: false, userName: '', opinion: '', rating: '' },
    languageValidation: { showAlert: false, message: '' },
    countChar: 0,
};

interface PayloadObjectFilesAlertInterface {
    showAlert: boolean;
    message: string;
}

interface PayloadObjectLanguageValidationInterface extends PayloadObjectFilesAlertInterface {}

interface PayloadObjectAlertInterface {
    showAlert: boolean;
    userName?: string;
    opinion?: string;
    rating?: string;
}

interface CustomKeyMessageInterface {
    key: string;
    message?: string;
}

interface ReducerAction {
    type: string;
    payload?:
        | number
        | boolean
        | string
        | string[]
        | []
        | FileList
        | File[]
        | File
        | PayloadObjectFilesAlertInterface
        | PayloadObjectFilesAlertInterface
        | PayloadObjectAlertInterface
        | PayloadObjectLanguageValidationInterface
        | CustomKeyMessageInterface;
}

export const reducerFunction = (state: typeof INITIAL_STATE, action: ReducerAction): typeof INITIAL_STATE => {
    switch (action.type) {
        case ACTIONS.RATING:
            return {
                ...state,
                rating: action.payload as number,
            };
        case ACTIONS.SEND_COMMENT:
            return {
                ...state,
                sendComment: action.payload as boolean,
            };
        case ACTIONS.OPINION:
            return {
                ...state,
                opinion: action.payload as string,
            };
        case ACTIONS.FILES:
            return {
                ...state,
                files: action.payload !== null ? (action.payload as FileList) : null,
            };
        case ACTIONS.FILES_ALERT:
            return {
                ...state,
                filesAlert: {
                    ...state.filesAlert,
                    showAlert: (action.payload as PayloadObjectFilesAlertInterface).showAlert,
                    message: (action.payload as PayloadObjectFilesAlertInterface).message,
                },
            };
        case ACTIONS.ALERT:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    showAlert: (action.payload as PayloadObjectAlertInterface).showAlert,
                    [(action.payload as CustomKeyMessageInterface).key]: (action.payload as CustomKeyMessageInterface)
                        .message,
                },
            };
        case ACTIONS.CLEAR_ALERT:
            return {
                ...state,
                alert: { showAlert: false, userName: '', opinion: '', rating: '' },
            };
        case ACTIONS.COUNT_CHAR:
            return {
                ...state,
                countChar: action.payload as number,
            };
        case ACTIONS.LANGUAGE_VALIDATION:
            return {
                ...state,
                languageValidation: {
                    ...state.languageValidation,
                    showAlert: (action.payload as PayloadObjectLanguageValidationInterface).showAlert,
                    message: (action.payload as PayloadObjectLanguageValidationInterface).message,
                },
            };
        case ACTIONS.RESET:
            return {
                ...INITIAL_STATE,
            };
        default:
            return state;
    }
};
