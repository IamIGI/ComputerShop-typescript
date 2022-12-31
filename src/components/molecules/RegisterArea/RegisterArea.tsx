import React, { useState, useEffect, useRef, useReducer, SyntheticEvent } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import { WrapButton, Wrapper, BottomRegister, ErrMsg, Instructions, ButtonSection } from './RegisterArea.style';
import { BsFillCaretUpFill } from 'react-icons/bs';
import axios from '../../../api/axios';
import useInput from 'hooks/useInput';
import useToggle from 'hooks/useToggle';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { formReducer, ACTIONS, INITIAL_STATE } from './formReducer';
import { AuthContextInterface } from 'context/AuthProvider';
import { AxiosError } from 'axios';

function RegisterArea() {
    const { setAuth } = useAuth() as AuthContextInterface;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.pathname === '/basket' ? location.pathname : '/accountSettings/Settings';
    const errRef = useRef<HTMLDivElement>(null);

    const [expanded, setExpanded] = useState<boolean>(false);
    //form values
    const [firstName, resetFirstName, firstNameAttribs] = useInput('firstName', '');
    const [lastName, resetLastName, lastNameAttribs] = useInput('lastName', '');
    const [email, resetEmail, emailAttribs] = useInput('email', '');
    const [pwd, setPwd] = useState<string>('');
    const [matchPwd, setMatchPwd] = useState<string>('');
    const [shopRules, setAgreeToShopRules] = useToggle('ShopRulesRegister', false);
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

    useEffect(() => {
        dispatch({ type: ACTIONS.VALID.NAME, payload: { name: 'firstName', value: firstName } });
    }, [firstName]);

    useEffect(() => {
        dispatch({ type: ACTIONS.VALID.NAME, payload: { name: 'lastName', value: lastName } });
    }, [lastName]);

    useEffect(() => {
        dispatch({ type: ACTIONS.VALID.EMAIL, payload: email });
    }, [email]);

    useEffect(() => {
        dispatch({ type: ACTIONS.VALID.PWD, payload: pwd });
        dispatch({ type: ACTIONS.VALID.MATCH_PWD, payload: { pwd, matchPwd } });
    }, [pwd, matchPwd]);

    useEffect(() => {
        dispatch({ type: ACTIONS.ERROR_MESSAGE, payload: '' });
    }, [firstName, lastName, email, pwd, matchPwd]);

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!shopRules) {
            dispatch({ type: ACTIONS.ERROR_MESSAGE, payload: 'Zaakceptuj regulamin sklepu' });
            return;
        }

        try {
            dispatch({ type: ACTIONS.WAIT_FOR_REGISTER, payload: true });
            await axios.post(
                '/register',
                JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    hashedPassword: pwd,
                    shopRules,
                    emailEnlistments: false,
                    smsEnlistments: false,
                    phoneEnlistments: false,
                    adjustedOffersEnlistments: false,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            dispatch({ type: ACTIONS.WAIT_FOR_REGISTER, payload: false });
            //clear
            setExpanded(!expanded);
            resetFirstName();
            resetLastName();
            resetEmail();
            setPwd('');
            setMatchPwd('');
            setAgreeToShopRules('false');

            const auth = await axios.post('/auth', JSON.stringify({ email, hashedPassword: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            const accessToken = auth?.data?.accessToken;
            const roles = auth?.data?.roles;
            const userName = auth?.data?.userName;
            const id = auth?.data?.id;
            setAuth({ id, userName, email, roles, accessToken });
            navigate(from, { replace: true });
        } catch (err) {
            if (err instanceof AxiosError) {
                if (!err?.response) {
                    dispatch({ type: ACTIONS.ERROR_MESSAGE, payload: 'Brak łączyności z serwerem' });
                } else if (err.response?.status === 409) {
                    dispatch({ type: ACTIONS.ERROR_MESSAGE, payload: 'Email jest już używany' });
                } else if (err.response?.status === 418) {
                    dispatch({ type: ACTIONS.ERROR_MESSAGE, payload: 'Użyte imie jest wulgarne' });
                } else {
                    console.log(err);
                    dispatch({ type: ACTIONS.ERROR_MESSAGE, payload: 'Nieznany błąd' });
                }
            }

            dispatch({ type: ACTIONS.WAIT_FOR_REGISTER, payload: false });
            (errRef.current as HTMLDivElement).focus();
        }
    };

    return (
        <>
            {state.waitForRegister ? (
                <LoadingAnimation loadingSize={10} />
            ) : (
                <Wrapper>
                    <form onSubmit={handleSubmit}>
                        {!expanded && <Button onClick={() => setExpanded(!expanded)}> Rejestracja </Button>}
                        {expanded && (
                            <section>
                                <div ref={errRef}>
                                    {' '}
                                    {state.errMsg && (
                                        <>
                                            <ErrMsg aria-live="assertive">{state.errMsg}</ErrMsg>
                                        </>
                                    )}
                                </div>
                                <Input
                                    style={state.valid.firstName || !firstName ? {} : { border: '1px solid red' }}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Imie (wymagane)"
                                    autoComplete="off"
                                    {...firstNameAttribs}
                                    required
                                    aria-invalid={state.valid.firstName ? 'false' : 'true'}
                                    aria-describedby="firstNameField"
                                    onFocus={(e) =>
                                        dispatch({ type: ACTIONS.FOCUS, payload: { name: e.target.name, value: true } })
                                    }
                                    onBlur={(e) =>
                                        dispatch({
                                            type: ACTIONS.FOCUS,
                                            payload: { name: e.target.name, value: false },
                                        })
                                    }
                                />
                                {state.focus.firstName && firstName && !state.valid.firstName && (
                                    <Instructions>Tylko litery</Instructions>
                                )}
                                <Input
                                    style={state.valid.lastName || !lastName ? {} : { border: '1px solid red' }}
                                    name="lastName"
                                    type="text"
                                    id="lastName"
                                    placeholder="Nazwisko (wymagane)"
                                    autoComplete="off"
                                    {...lastNameAttribs}
                                    required
                                    aria-invalid={state.valid.lastName ? 'false' : 'true'}
                                    aria-describedby="lastNameField"
                                    onFocus={(e) =>
                                        dispatch({ type: ACTIONS.FOCUS, payload: { name: e.target.name, value: true } })
                                    }
                                    onBlur={(e) =>
                                        dispatch({
                                            type: ACTIONS.FOCUS,
                                            payload: { name: e.target.name, value: false },
                                        })
                                    }
                                />
                                {state.focus.lastName && lastName && !state.valid.lastName && (
                                    <Instructions>Tylko litery</Instructions>
                                )}
                                <Input
                                    style={state.valid.email || !email ? {} : { border: '1px solid red' }}
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email (wymagane)"
                                    autoComplete="off"
                                    {...emailAttribs}
                                    required
                                    aria-invalid={state.valid.email ? 'false' : 'true'}
                                    aria-describedby="EmailField"
                                    onFocus={(e) =>
                                        dispatch({ type: ACTIONS.FOCUS, payload: { name: e.target.name, value: true } })
                                    }
                                    onBlur={(e) =>
                                        dispatch({
                                            type: ACTIONS.FOCUS,
                                            payload: { name: e.target.name, value: false },
                                        })
                                    }
                                />
                                {state.focus.email && email && !state.valid.email && (
                                    <Instructions>Email jest nie poprawny.</Instructions>
                                )}
                                <Input
                                    style={state.valid.pwd || !pwd ? {} : { border: '1px solid red' }}
                                    type="password"
                                    id="password"
                                    name="pwd"
                                    placeholder="Haslo (wymagane)"
                                    autoComplete="off"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    aria-invalid={state.valid.pwd ? 'false' : 'true'}
                                    aria-describedby="PwdField"
                                    onFocus={(e) =>
                                        dispatch({ type: ACTIONS.FOCUS, payload: { name: e.target.name, value: true } })
                                    }
                                    onBlur={(e) =>
                                        dispatch({
                                            type: ACTIONS.FOCUS,
                                            payload: { name: e.target.name, value: false },
                                        })
                                    }
                                    onKeyUp={(e) => dispatch({ type: ACTIONS.CHECK_CAPS_LOCK, payload: e })}
                                />
                                {state.focus.pwd && pwd && !state.valid.pwd && (
                                    <Instructions>
                                        8-24 znaków. <br />
                                        Muszą zawierać małe i duże litery, <br />
                                        liczby oraz znaki specjalne.
                                    </Instructions>
                                )}
                                <Input
                                    style={state.valid.matchPwd || !matchPwd ? {} : { border: '1px solid red' }}
                                    type="password"
                                    id="passwordMatch"
                                    name="matchPwd"
                                    placeholder="Powtórz hasło (wymagane)"
                                    autoComplete="off"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required
                                    aria-invalid={state.valid.matchPwd ? 'false' : 'true'}
                                    aria-describedby="MatchPwdField"
                                    onFocus={(e) =>
                                        dispatch({ type: ACTIONS.FOCUS, payload: { name: e.target.name, value: true } })
                                    }
                                    onBlur={(e) =>
                                        dispatch({
                                            type: ACTIONS.FOCUS,
                                            payload: { name: e.target.name, value: false },
                                        })
                                    }
                                    onKeyUp={(e) => dispatch({ type: ACTIONS.CHECK_CAPS_LOCK, payload: e })}
                                />
                                {state.focus.matchPwd && !state.valid.matchPwd && (
                                    <Instructions>Hasła muszą być takie same</Instructions>
                                )}
                                {(state.focus.matchPwd || state.focus.pwd) && state.capsLock && (
                                    <Instructions>Caps Lock jest wciśnięty</Instructions>
                                )}
                                <BottomRegister onClick={() => setAgreeToShopRules()}>
                                    <Checkbox type="checkbox" checked={shopRules} readOnly={true} />
                                    Akceptuj regulamin sklepu
                                </BottomRegister>
                                <ButtonSection>
                                    <Button
                                        disabled={
                                            !state.valid.firstName ||
                                            !state.valid.lastName ||
                                            !state.valid.email ||
                                            !state.valid.pwd ||
                                            !state.valid.matchPwd
                                                ? true
                                                : false
                                        }
                                    >
                                        {' '}
                                        Załóż konto!{' '}
                                    </Button>
                                    <WrapButton onClick={() => setExpanded(!expanded)}>
                                        <BsFillCaretUpFill />
                                    </WrapButton>
                                </ButtonSection>
                            </section>
                        )}
                    </form>
                </Wrapper>
            )}
        </>
    );
}

export default RegisterArea;
