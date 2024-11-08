import { Wrapper, Section, RegisterSection, BottomLogin, AuthorizationInstructions } from './Authorization.style';
import { FaStopwatch20 } from 'react-icons/fa';
import { TbFileInvoice, TbMapSearch, TbShoppingCartDiscount } from 'react-icons/tb';
import { GreenButton } from 'components/atoms/GreenButton/GreenButton.style';
import { GreenButtonLink } from 'components/atoms/GreenButtonLink/GreenButtonLink.style';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import useToggle from 'hooks/useToggle';
import { KeyboardEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import useInput from 'hooks/useInput';
import { testEmailRegex } from 'data/Regex';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'axios';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { ErrMsg, ErrMsgContainer } from 'components/molecules/LoginArea/LoginArea.style';
import {
    InputDescription,
    InputField,
    InputSection,
} from 'components/atoms/InputWithDescription/InputWithDescription.style';
import { setCredentials } from 'features/auth/authSlice';
import { useLoginMutation } from 'features/auth/authApiSlice';
import { useDispatch } from 'react-redux';

const Authorization = () => {
    const navigate = useNavigate();

    const errRef = useRef<HTMLDivElement>(null);

    const [email, resetEmail, emailAttribs] = useInput('email', '');
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [emailFocus, setEmailFocus] = useState<boolean>(false);

    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>('');
    const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);

    const [waitForLogIn, setWaitForLogIn] = useState<boolean>(false);

    const [check, toggleCheck] = useToggle('persist', false);

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    const isButtonDisabled = (validEmail: boolean, pwd: string): boolean => {
        if (validEmail && pwd.length !== 0) return false;
        return true;
    };

    useEffect(() => {
        isButtonDisabled(validEmail, pwd);
    }, [validEmail, pwd]);

    //clearErrors
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    useEffect(() => {
        setValidEmail(testEmailRegex(email));
    }, [email]);

    //send Form
    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            resetEmail(); //working - fix, cuz get reset everytime...

            const userData = await login({ email, hashedPassword: pwd }).unwrap();

            dispatch(setCredentials({ ...userData, email }));

            setPwd('');
            navigate('/', { replace: true });
        } catch (err) {
            if (axiosInstance.isAxiosError(err)) {
                if (!err?.response) {
                    setErrMsg('Brak łącznośći z serwerem');
                } else if (err.response?.status === 400) {
                    setErrMsg('Wpisz Email i Hasło');
                } else if (err.response?.status === 401) {
                    setErrMsg('Do podanego email-u nie ma przypisanego konta');
                } else if (err.response?.status === 406) {
                    setErrMsg('Błędne hasło');
                } else {
                    console.log(err);
                    setErrMsg('Nieznany bład');
                }
            }

            (errRef.current as HTMLDivElement).focus();
        }
    };

    //Check if capsLock is up
    const checkCapsLock = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.getModifierState('CapsLock')) {
            setIsCapsLockOn(true);
        } else {
            setIsCapsLockOn(false);
        }
    };

    return (
        <>
            <Wrapper>
                {waitForLogIn ? (
                    <LoadingAnimation loadingSize={10} />
                ) : (
                    <Section>
                        <h1>Zaloguj się</h1>
                        <ErrMsgContainer ref={errRef}>
                            {errMsg && <ErrMsg aria-live="assertive">{errMsg}</ErrMsg>}
                        </ErrMsgContainer>
                        <form onSubmit={handleSubmit}>
                            <InputSection>
                                <InputField
                                    style={validEmail || !email ? {} : { border: '1px solid red' }}
                                    type="text"
                                    id="email"
                                    autoComplete="off"
                                    {...emailAttribs}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    required
                                />
                                <InputDescription>E-mail</InputDescription>
                            </InputSection>
                            {emailFocus && email && !validEmail && (
                                <AuthorizationInstructions>Email jest nie poprawny.</AuthorizationInstructions>
                            )}
                            <InputSection>
                                <InputField
                                    type="password"
                                    name="pwd"
                                    id="pwd"
                                    autoComplete="off"
                                    onChange={(e) => setPwd(e.target.value)}
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                    value={pwd}
                                    onKeyUp={checkCapsLock}
                                    required
                                />
                                <InputDescription>Hasło</InputDescription>
                            </InputSection>
                            {isCapsLockOn && pwdFocus && pwd && (
                                <AuthorizationInstructions>Caps Lock jest wciśnięty</AuthorizationInstructions>
                            )}

                            <BottomLogin onClick={() => toggleCheck()}>
                                <Checkbox type="checkbox" checked={check} readOnly={true} />
                                <div>Zaufaj temu urządzeniu</div>
                            </BottomLogin>
                            <GreenButton disabled={isButtonDisabled(validEmail, pwd)}>Zaloguj się</GreenButton>
                        </form>
                        <RegisterSection>
                            <p>Nie masz konta? </p>
                            <GreenButtonLink to="/authorization/register">Załóź konto</GreenButtonLink>
                        </RegisterSection>
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
};

export default Authorization;
