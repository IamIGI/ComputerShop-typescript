import React, { useState, useEffect, useRef, useReducer, SyntheticEvent } from 'react';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import {
    BottomLogin,
    RegisterInstructions,
    Section,
    Wrapper,
    ErrMsg,
} from 'components/templates/Mobile/Authorization/Authorization.style';

import useInput from 'hooks/useInput';
import useToggle from 'hooks/useToggle';
import { useNavigate, useLocation } from 'react-router-dom';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { formReducer, ACTIONS, INITIAL_STATE } from 'components/molecules/RegisterArea/formReducer';
import axios from 'api/axios';
import useAuth from 'hooks/useAuth';
import DescriptionSection from '../Authorization/DescriptionSection/DescriptionSection';
import { FaStopwatch20 } from 'react-icons/fa';
import { TbFileInvoice, TbMapSearch, TbShoppingCartDiscount } from 'react-icons/tb';
import {
    InputDescription,
    InputField,
    InputSection,
} from 'components/atoms/InputWithDescription/InputWithDescription.style';
import { GreenButton } from 'components/atoms/GreenButton/GreenButton.style';
import { AuthContextInterface } from 'context/AuthProvider';
import { AxiosError } from 'axios';
import { setCredentials } from 'features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'features/auth/authApiSlice';

function RegisterArea() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.pathname === '/basket' ? location.pathname : '/accountSettings/Settings';
    const errRef = useRef<HTMLDivElement>(null);

    //form values
    const [firstName, resetFirstName, firstNameAttribs] = useInput('firstName', '');
    const [lastName, resetLastName, lastNameAttribs] = useInput('lastName', '');
    const [email, resetEmail, emailAttribs] = useInput('email', '');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
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

    const [login, { isLoading }] = useLoginMutation();
    const dispatchStore = useDispatch();

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

            resetFirstName();
            resetLastName();
            resetEmail();
            setPwd('');
            setMatchPwd('');
            setAgreeToShopRules('false');

            // const auth = await axios.post('/auth', JSON.stringify({ email, hashedPassword: pwd }), {
            //     headers: { 'Content-Type': 'application/json' },
            //     withCredentials: true,
            // });
            // const accessToken = auth?.data?.accessToken;
            // const roles = auth?.data?.roles;
            // const userName = auth?.data?.userName;
            // const id = auth?.data?.id;
            // setAuth({ id, userName, email, roles, accessToken });
            const userData = await login({ email, hashedPassword: pwd }).unwrap();
            dispatchStore(setCredentials({ ...userData, email }));
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
            <Wrapper>
                {state.waitForRegister ? (
                    <LoadingAnimation loadingSize={10} />
                ) : (
                    <Section>
                        <h1>Rejestracja</h1>
                        <form onSubmit={handleSubmit}>
                            <div ref={errRef}>
                                {' '}
                                {state.errMsg && <ErrMsg aria-live="assertive">{state.errMsg}</ErrMsg>}
                            </div>
                            <InputSection>
                                <InputField
                                    style={state.valid.firstName || !firstName ? {} : { border: '1px solid red' }}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
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
                                <InputDescription>Imię</InputDescription>
                            </InputSection>
                            {state.focus.firstName && firstName && !state.valid.firstName && (
                                <RegisterInstructions>Tylko litery</RegisterInstructions>
                            )}
                            <InputSection>
                                <InputField
                                    style={state.valid.lastName || !lastName ? {} : { border: '1px solid red' }}
                                    name="lastName"
                                    type="text"
                                    id="lastName"
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
                                <InputDescription>Nazwisko</InputDescription>
                            </InputSection>
                            {state.focus.lastName && lastName && !state.valid.lastName && (
                                <RegisterInstructions>Tylko litery</RegisterInstructions>
                            )}
                            <InputSection>
                                <InputField
                                    style={state.valid.email || !email ? {} : { border: '1px solid red' }}
                                    type="text"
                                    id="email"
                                    name="email"
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
                                <InputDescription>E-mail</InputDescription>
                            </InputSection>
                            {state.focus.email && email && !state.valid.email && (
                                <RegisterInstructions>Email jest nie poprawny.</RegisterInstructions>
                            )}
                            <InputSection>
                                <InputField
                                    style={state.valid.pwd || !pwd ? {} : { border: '1px solid red' }}
                                    type="password"
                                    id="password"
                                    name="pwd"
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
                                <InputDescription>Hasło</InputDescription>
                            </InputSection>
                            {state.focus.pwd && pwd && !state.valid.pwd && (
                                <RegisterInstructions>
                                    8-24 znaków. <br />
                                    Muszą zawierać małe i duże litery, <br />
                                    liczby oraz znaki specjalne.
                                </RegisterInstructions>
                            )}
                            <InputSection>
                                <InputField
                                    style={state.valid.matchPwd || !matchPwd ? {} : { border: '1px solid red' }}
                                    type="password"
                                    id="passwordMatch"
                                    name="matchPwd"
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
                                <InputDescription>Powtórz hasło</InputDescription>
                            </InputSection>
                            {state.focus.matchPwd && !state.valid.matchPwd && (
                                <RegisterInstructions>Hasła muszą być takie same</RegisterInstructions>
                            )}
                            {(state.focus.matchPwd || state.focus.pwd) && state.capsLock && (
                                <RegisterInstructions>Caps Lock jest wciśnięty</RegisterInstructions>
                            )}
                            <BottomLogin onClick={() => setAgreeToShopRules()}>
                                <Checkbox type="checkbox" checked={shopRules} readOnly={true} />
                                Akceptuj regulamin sklepu
                            </BottomLogin>

                            <GreenButton
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
                                Załóż konto!
                            </GreenButton>
                        </form>
                    </Section>
                )}
                <Section>
                    <h2>Dlaczego warto mieć konto w HotShoot</h2>

                    <DescriptionSection icon={<FaStopwatch20 />} description={'zamawiaj szybciej'} />
                    <DescriptionSection icon={<TbFileInvoice />} description={'sprawdzaj poprzednie zamówienia'} />
                    <DescriptionSection icon={<TbMapSearch />} description={'śledź status zamówienia'} />
                    <DescriptionSection
                        icon={<TbShoppingCartDiscount />}
                        description={'korzystanie z rabatów i promocji'}
                    />
                </Section>
            </Wrapper>
        </>
    );
}

export default RegisterArea;
