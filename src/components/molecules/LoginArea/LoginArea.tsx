import { useState, useRef, useEffect, KeyboardEvent, SyntheticEvent } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { WrapButton, ErrMsg, Instructions, Wrapper, BottomLogin, ErrMsgContainer } from './LoginArea.style';
import { useNavigate, useLocation } from 'react-router-dom';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import useInput from 'hooks/useInput';
import useToggle from 'hooks/useToggle';
import { testEmailRegex } from 'data/Regex';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { AxiosError } from 'axios';
import { useLoginMutation } from 'features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'features/auth/authSlice';

interface LoginAreaProps {
    mobileView?: boolean;
}

function LoginArea({ mobileView }: LoginAreaProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.pathname || '/';

    const [expanded, setExpanded] = useState<boolean>(false);
    const errRef = useRef<HTMLDivElement>(null);

    const [email, resetEmail, emailAttribs] = useInput('email', '');
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [emailFocus, setEmailFocus] = useState<boolean>(false);

    const [pwd, setPwd] = useState<string>('');
    const [pwdFocus, setPwdFocus] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>('');
    const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);

    const [check, toggleCheck] = useToggle('persist', false);

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

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
            if (!mobileView) {
                navigate(from, { replace: true });
            } else {
                navigate('/', { replace: true });
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response?.status === 400) {
                    setErrMsg('Wpisz Email i Hasło');
                } else if (err.response?.status === 401) {
                    setErrMsg('Do podanego email-u nie ma przypisanego konta');
                } else if (err.response?.status === 406) {
                    setErrMsg('Błędne hasło');
                } else if (!err?.response) {
                    setErrMsg('Brak łącznośći z serwerem');
                } else {
                    console.log(err);
                    setErrMsg('Nieznany bład');
                }
            }

            (errRef.current as HTMLDivElement).focus();
        }
    };

    const isButtonDisabled = (validEmail: boolean, pwd: string): boolean => {
        if (validEmail && pwd.length !== 0) return false;
        return true;
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
            {isLoading ? (
                <LoadingAnimation loadingSize={10} />
            ) : (
                <Wrapper>
                    <ErrMsgContainer ref={errRef}>
                        {errMsg && <ErrMsg aria-live="assertive">{errMsg}</ErrMsg>}
                    </ErrMsgContainer>
                    <form onSubmit={handleSubmit}>
                        {!expanded && <Button onClick={() => setExpanded(!expanded)}>Logowanie</Button>}
                        {expanded && (
                            <>
                                <Input
                                    placeholder="E-mail (wymagane)"
                                    style={validEmail || !email ? {} : { border: '1px solid red' }}
                                    type="text"
                                    id="email"
                                    autoComplete="off"
                                    {...emailAttribs}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    required
                                />
                                {emailFocus && email && !validEmail && (
                                    <Instructions>Email jest nie poprawny.</Instructions>
                                )}
                                <Input
                                    placeholder="Hasło (wymagane)"
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
                                {isCapsLockOn && pwdFocus && pwd && (
                                    <Instructions>Caps Lock jest wciśnięty</Instructions>
                                )}
                                <BottomLogin onClick={() => toggleCheck()}>
                                    <Checkbox type="checkbox" checked={check} readOnly={true} />
                                    <div>Zaufaj temu urządzeniu</div>
                                </BottomLogin>
                                <Button disabled={isButtonDisabled(validEmail, pwd)}> Zaloguj sie </Button>
                                <WrapButton onClick={() => setExpanded(!expanded)}>
                                    <BsFillCaretUpFill />
                                </WrapButton>
                            </>
                        )}
                    </form>
                </Wrapper>
            )}
        </>
    );
}

export default LoginArea;
