import {
    Wrapper,
    TopWrapper,
    FormSection,
    InputSection,
    InputDescription,
    TextAreaSection,
    ButtonSection,
    DescriptionSection,
    SelectSection,
    Instructions,
    EmailSection,
    SuccessIcon,
    SuccessDescription,
    SuccessSection,
    FailureSection,
    FileSection,
} from './ContactAuthor.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BsEnvelope } from 'react-icons/bs';
import { TextArea } from 'components/molecules/PopUpAddComment/PopUpAddComment.style';
import { Input } from 'components/atoms/Input/Input';
import { useEffect, useReducer, KeyboardEvent, FocusEvent, SyntheticEvent, ChangeEvent } from 'react';
import { BuyButton } from 'components/molecules/ProductBuyContent/ProductBuyContent.style';
import SetFilterItems from 'components/atoms/SetFilterItems/SetFilterItems';
import { sendContactAPI } from 'api/contact';
import { BiMessageAltCheck, BiCommentError } from 'react-icons/bi';
import { formReducer, ACTIONS, INITIAL_STATE, MESSAGE_OPTIONS } from './formReducer';
import toast from 'react-hot-toast';
import { FiltersDropDownListInterface } from 'interfaces/GLOBAL.interfaces';
import axios from 'axios';

const ContactAuthor = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
    const notify = () =>
        toast.success('Wiadomość została wysłana', {
            icon: '📧',
            duration: 2000,
        });

    const handleMessageType = (data: FiltersDropDownListInterface[]) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                dispatch({ type: ACTIONS.MESSAGE_CATEGORY, payload: data[i].value });
                break;
            }
        }
    };

    interface clearInputInterface {
        target: {
            name: string;
            value: string;
        };
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | clearInputInterface) => {
        dispatch({
            type: ACTIONS.INPUT,
            payload: { name: (e.target as HTMLInputElement).name, value: (e.target as HTMLInputElement).value },
        });
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>, value: boolean) => {
        dispatch({
            type: ACTIONS.FOCUS,
            payload: { name: e.target.name, value },
        });
    };

    const handleError = (err: [boolean, string]) => {
        dispatch({
            type: ACTIONS.ERROR,
            payload: err,
        });
    };

    const handleSuccess = (data: boolean) => {
        dispatch({
            type: ACTIONS.SUCCESS,
            payload: data,
        });
    };

    useEffect(() => {
        dispatch({ type: ACTIONS.VALID_EMAIL, payload: state.input.email });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.input.email]);

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(state.files).forEach((key) => {
            //arg1 = add state.files to file object, arg2 = object itself
            formData.append(
                (state.files as unknown as FileList).item(key as unknown as number)!.name,
                (state.files as unknown as FileList).item(key as unknown as number)!
            );
        });
        formData.append('name', state.input.name);
        formData.append('email', state.input.email);
        formData.append('category', state.messageCategory as unknown as string);
        formData.append('message', state.input.message);

        try {
            const response = await sendContactAPI(formData);

            if (response.code === '001') {
                handleError([true, 'Wiadomość zawiera słowa wulgarne']);
            } else if (response.code === '002') {
                handleError([true, 'Imie zawiera słowa wulgarne']);
            } else if (response.code === '003') {
                handleError([true, "Dopuszczalne rozszerznia: '.png', '.jpg', 'jpeg'"]);
            } else if (response.code === '004') {
                handleError([true, 'Maksymalan waga pliku: 1MB']);
            } else if (response.code === '000') {
                handleError([false, '']);
                handleSuccess(true);

                //clear
                let e = { target: { name: 'name', value: '' } };
                handleInput(e);
                handleInput((e = { target: { name: 'email', value: '' } }));
                dispatch({ type: ACTIONS.MESSAGE_CATEGORY, payload: 0 });
                handleInput((e = { target: { name: 'message', value: '' } }));
                //@ts-ignore
                dispatch({ type: ACTIONS.FILES, payload: [] });
                notify();
            }
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
    };

    const isButtonDisabled = (name: string, validEmail: boolean, message: string): boolean => {
        if (name.length !== 0 && validEmail && message.length !== 0) return false;
        return true;
    };

    useEffect(() => {
        setTimeout(() => {
            handleSuccess(false);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.success]);
    return (
        <Wrapper>
            <SectionDescription title={'Skontaktuj się z autorem'} icon={<BsEnvelope />} />
            <TopWrapper>
                <FormSection>
                    <form onSubmit={handleSubmit}>
                        <InputSection>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="off"
                                value={state.input.name}
                                onChange={(e) => handleInput(e)}
                                required
                            />
                            <InputDescription>Imie</InputDescription>
                        </InputSection>
                        <EmailSection>
                            <InputSection>
                                <Input
                                    type="text"
                                    id="email"
                                    name="email"
                                    style={state.validEmail || !state.input.email ? {} : { border: '1px solid red' }}
                                    autoComplete="off"
                                    onFocus={(e) => handleFocus(e, true)}
                                    onBlur={(e) => handleFocus(e, false)}
                                    value={state.input.email}
                                    onChange={(e) => handleInput(e)}
                                    required={state.messageCategory === 0 ? false : true}
                                />

                                <InputDescription>Email</InputDescription>
                            </InputSection>
                            {state.focus.email && state.input.email && !state.validEmail && (
                                <Instructions>
                                    Email jest <br /> nie poprawny.
                                </Instructions>
                            )}
                        </EmailSection>
                        <SelectSection>
                            <SetFilterItems
                                OneTimeChoice={true}
                                width="230px"
                                description={'Typ wiadomości'}
                                filterData={MESSAGE_OPTIONS}
                                handleItems={handleMessageType}
                            />
                        </SelectSection>
                        <FileSection>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => dispatch({ type: ACTIONS.FILES, payload: e.target.files as FileList })}
                            />
                        </FileSection>
                        <TextAreaSection>
                            <TextArea
                                maxLength={2000}
                                name="message"
                                value={state.input.message}
                                onChange={(e) => handleInput(e)}
                            />
                            <InputDescription>Wiadomość</InputDescription>
                        </TextAreaSection>
                        <ButtonSection>
                            <BuyButton
                                name="Submit"
                                disabled={isButtonDisabled(state.input.name, state.validEmail, state.input.message)}
                            >
                                <p>Wyślij</p>
                            </BuyButton>
                            {state.errMsg[0] ? (
                                <FailureSection>
                                    <SuccessIcon>
                                        <BiCommentError />
                                    </SuccessIcon>
                                    <SuccessDescription>{state.errMsg[1]}</SuccessDescription>
                                </FailureSection>
                            ) : (
                                <></>
                            )}
                            {state.success ? (
                                <SuccessSection>
                                    <SuccessIcon>
                                        <BiMessageAltCheck />
                                    </SuccessIcon>
                                    <SuccessDescription>
                                        Wiadomość
                                        <br /> wysłana
                                    </SuccessDescription>
                                </SuccessSection>
                            ) : (
                                <></>
                            )}
                        </ButtonSection>
                    </form>
                </FormSection>
                <DescriptionSection>
                    <p> Cześć, tutaj Igor, MERN developer z zainteresowania. </p>{' '}
                    <p>
                        {' '}
                        Strona na której jesteś to moj pierwszy duży projekt, z założenia rozwijany póki nie uda mi się
                        zmienić pracy 😉
                    </p>
                    <p>
                        {' '}
                        Jeżeli udało Ci się znaleźć błąd w funkcjonowaniu strony, napisz do mnie w tym formularzu
                        kontaktowym 😊{' '}
                    </p>{' '}
                    <p>
                        Pole e-mail nie jest obowiązkowe, jednak na pewno odeśle swoje podziękowania jeżeli je
                        zostawisz.{' '}
                    </p>{' '}
                    <p>
                        {' '}
                        Jeżeli interesuje Cię współpraca wybierz odpowiednia kategorię z rozwijanej listy, wtedy pole
                        E-mail jest już obowiązkowe.{' '}
                    </p>{' '}
                    <br /> <b>Za wszelkie uwagi, z góry dziękuje. 😊</b>
                </DescriptionSection>
            </TopWrapper>
        </Wrapper>
    );
};

export default ContactAuthor;
