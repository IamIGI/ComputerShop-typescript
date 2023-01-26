import { ChangeEvent, FocusEvent, KeyboardEvent, SyntheticEvent, useEffect, useReducer, useState } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection, OuterFormWrapper } from './PopUpAccountSettiings.style';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { popUpAccountSettingsReducer, ACTIONS, INITIAL_STATE } from './PopUpAccountSettings.reducer';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { changeUserName, selectAuth, setCredentials } from 'features/auth/authSlice';

interface PopUpAccountSettingsProps {
    name: string;
    value: string;
    onClose: () => void;
    handleRefresh: () => void;
}

const PopUpAccountSettings = ({ name, value, onClose, handleRefresh }: PopUpAccountSettingsProps) => {
    const auth = useSelector(selectAuth);
    const axiosPrivate = useAxiosPrivate();
    const [state, dispatch] = useReducer(popUpAccountSettingsReducer, INITIAL_STATE);
    const [isMatchPwd, setIsMatchPwd] = useState<boolean>(true);

    const notify = () =>
        toast.success('Dane konta zmienione', {
            duration: 2000,
        });

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ACTIONS.INPUT,
            payload: { name: (e.target as HTMLInputElement).name, value: (e.target as HTMLInputElement).value },
        });
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>, value: boolean) => {
        dispatch({
            type: ACTIONS.FOCUS,
            payload: { name: (e.target as HTMLInputElement).name, value },
        });
    };
    /** In edited field we can have name type like: email, password, name */
    const handleValidation = (name: string, value: string) => {
        dispatch({
            type: ACTIONS.VALID_EDITED_FIELD,
            payload: { name, value },
        });
    };

    const handleCapsLock = (e: KeyboardEvent<HTMLInputElement>) => {
        dispatch({
            type: ACTIONS.CAPS_LOCK,
            payload: e,
        });
    };

    useEffect(() => {
        handleValidation(name, state.input.editedField);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.input.editedField]);

    let viewedName = '';
    switch (name) {
        case 'firstName':
            viewedName = 'Imie';
            break;

        case 'lastName':
            viewedName = 'Nazwisko';
            break;

        case 'email':
            viewedName = 'E-mail';
            break;

        case 'hashedPassword':
            viewedName = 'Hasło';
            break;

        default:
            break;
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === 'hashedPassword' && state.input.editedField !== state.input.repeatPassword) {
            setIsMatchPwd(false);
            return;
        }

        const data = {
            _id: auth.id,
            fieldName: name,
            edited: state.input.editedField,
            password: state.input.password,
        };

        try {
            const response = await axiosPrivate.put('user/accountData', data);
            if (name === 'firstName') {
                dispatch(changeUserName({ userName: state.input.editedField }));
            }

            handleRefresh();
            onClose();
            notify();
        } catch (err) {
            if (err instanceof AxiosError) {
                console.log(err);
                if (err.response!.status === 406) dispatch({ type: ACTIONS.BAD_PASSWORD, payload: true });
            }
        }
    };

    return (
        <Wrapper>
            <Title>
                <h3>
                    <span> Edytuj:</span> {viewedName}
                </h3>
            </Title>
            <OuterFormWrapper>
                <form onSubmit={handleSubmit}>
                    <FormSection>
                        <InputLocal
                            name="editedField"
                            type={name === 'hashedPassword' ? 'password' : 'text'}
                            placeholder={name === 'hashedPassword' ? 'Nowe hasło' : `Zmieniasz: ${value}`}
                            value={state.input.editedField}
                            onChange={(e) => handleInput(e)}
                            onFocus={(e) => handleFocus(e, true)}
                            onBlur={(e) => handleFocus(e, false)}
                            onKeyUp={name === 'hashedPassword' ? (e) => handleCapsLock(e) : undefined}
                        />

                        {state.focus.editedField && state.isCapsLock && name === 'hashedPassword' ? (
                            <p>Caps Lock jest wciśnięty</p>
                        ) : (
                            <></>
                        )}
                        {state.focus.editedField &&
                            state.input.editedField &&
                            !state.validEditedField &&
                            (name === 'email' ? (
                                <p>Email jest nie poprawny.</p>
                            ) : name === 'hashedPassword' ? (
                                <p>
                                    8-24 znaków. <br />
                                    Muszą zawierać małe i duże litery, <br />
                                    liczby oraz znaki specjalne.
                                </p>
                            ) : name === 'firstName' || name === 'lastName' ? (
                                <p>Tylko litery</p>
                            ) : (
                                <></>
                            ))}
                        {name === 'hashedPassword' && (
                            <InputLocal
                                name="repeatPassword"
                                type="password"
                                placeholder={`Powtórz hasło`}
                                value={state.input.repeatPassword}
                                onFocus={(e) => handleFocus(e, true)}
                                onBlur={(e) => handleFocus(e, false)}
                                onChange={(e) => handleInput(e)}
                                onKeyUp={(e) => handleCapsLock(e)}
                            />
                        )}
                        {state.focus.repeatPassword && state.isCapsLock && name === 'hashedPassword' ? (
                            <p>Caps Lock jest wciśnięty</p>
                        ) : (
                            <></>
                        )}

                        <InputLocal
                            name="password"
                            placeholder="Podaj hasło aby zatwierdzić"
                            type="password"
                            value={state.input.password}
                            onChange={(e) => handleInput(e)}
                            onFocus={(e) => handleFocus(e, true)}
                            onBlur={(e) => handleFocus(e, false)}
                            onKeyUp={(e) => handleCapsLock(e)}
                        />

                        {state.focus.password && state.isCapsLock ? <p>Caps Lock jest wciśnięty</p> : <></>}

                        {state.badPassword && <p>Złe hasło</p>}
                        {!isMatchPwd && <p>Hasła muszą być takie same</p>}

                        <ButtonLocal type="submit">Zapisz</ButtonLocal>
                    </FormSection>
                </form>
            </OuterFormWrapper>
        </Wrapper>
    );
};

export default PopUpAccountSettings;
