import {
    AddComment,
    Rating,
    Information,
    ProductDescription,
    Image,
    Description,
    TextArea,
    Title,
    ProductName,
    RatingStars,
    WrapperOutside,
    WrapperInside,
    LittleDescription,
    AnonymousUser,
    Input,
    UserDescription,
    Alert,
    OpinionSection,
    NumOfChars,
    FailureDescription,
    FailureIcon,
    FailureSection,
    FileSection,
    FilesAlert,
    ButtonName,
    UserDescriptionSmall,
    ButtonAddComment,
} from './PopUpAddComment.style';
import { useState, useReducer, SyntheticEvent, useEffect } from 'react';
import StarRating from 'components/atoms/StarRating/StarRating';
import { sendCommentAPI } from 'api/comments';
import { BiCommentError } from 'react-icons/bi';
import { ACTIONS, INITIAL_STATE, reducerFunction } from './reducerLogic';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddedComment } from 'features/products/productsSlice';
import { refreshComments } from 'features/comments/commentsSlice';

import axios from 'axios';
import { selectAuth } from 'features/auth/authSlice';
import { refreshAccountComments } from 'features/account/opinions/accountOpinionsSlice';

interface PopUpAddCommentProps {
    onClose: () => void;
    productData: { _id: string; name: string; prevImg: string };
    refreshAccountOpinions?: boolean;
}

const PopUpAddComment = ({ onClose, productData, refreshAccountOpinions }: PopUpAddCommentProps) => {
    const dispatchStore = useDispatch();

    const auth = useSelector(selectAuth);
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);
    const [userName, setUserName] = useState<string>(auth.userName !== null ? auth.userName : '');

    const notify = () =>
        toast.success('Dodano komentarz', {
            icon: '🗨️',
            duration: 2000,
        });

    const changeState = (type: string, value: any) => {
        dispatch({
            type,
            payload: value,
        });
    };

    const handleRating = (value: number) => {
        dispatch({
            type: ACTIONS.RATING,
            payload: value,
        });
    };

    const handleAlert = (showAlert: boolean, key: string, message: string) => {
        dispatch({
            type: ACTIONS.ALERT,
            payload: { showAlert, key, message },
        });
    };

    const handleLanguageValidation = (showAlert: boolean, message: string) => {
        dispatch({
            type: ACTIONS.LANGUAGE_VALIDATION,
            payload: { showAlert, message },
        });
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userName.length !== 0 && state.opinion.length > 10 && state.rating !== 0) {
            const formData = new FormData();
            formData.append('productId', productData._id);
            formData.append('userId', auth.id !== null ? auth.id : '');
            formData.append('userName', userName);
            formData.append('rating', state.rating as unknown as string); // formData accepts just string values
            formData.append('description', state.opinion.replace(/\n/g, '也'));
            ///Add file(image)
            if (state.files !== null) {
                Object.keys(state.files).forEach((key) => {
                    formData.append(
                        (state.files as unknown as FileList).item(key as unknown as number)!.name.split('.')[0],
                        (state.files as unknown as FileList).item(key as unknown as number)!
                    );
                });
            }

            try {
                const response = await sendCommentAPI(formData);

                if (response.code === '105') {
                    handleLanguageValidation(true, 'Imie zawiera słowa wulgarne');
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === '101') {
                    handleLanguageValidation(true, 'Wiadomość zawiera słowa wulgarne');
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === '003') {
                    dispatch({
                        type: ACTIONS.FILES_ALERT,
                        payload: { showAlert: true, message: "Dopuszczalne rozszerznia: '.png', '.jpg', 'jpeg'" },
                    });
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === '004') {
                    dispatch({
                        type: ACTIONS.FILES_ALERT,
                        payload: { showAlert: true, message: 'Maksymalan waga pliku: 1MB' },
                    });
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === 104) {
                    //happyPath
                    handleLanguageValidation(false, '');
                    dispatch({ type: ACTIONS.RESET });
                    changeState(ACTIONS.SEND_COMMENT, false);
                    onClose();
                    dispatchStore(refreshComments());
                    dispatchStore(handleAddedComment(true));
                    notify();

                    if (refreshAccountOpinions) dispatchStore(refreshAccountComments());
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
        } else {
            handleLanguageValidation(false, '');

            userName.length === 0
                ? handleAlert(true, 'userName', 'Brakujące pole - Podpis')
                : handleAlert(true, 'userName', '');
            state.opinion.length <= 10
                ? handleAlert(true, 'opinion', 'Brakujące pole - Opinia (min. 10 znaków)')
                : handleAlert(true, 'opinion', '');
            state.rating === 0 ? handleAlert(true, 'rating', 'Minimalna ocena to 1') : handleAlert(true, 'rating', '');
        }
        changeState(ACTIONS.SEND_COMMENT, false);
    };

    return (
        <WrapperOutside>
            <Title>Dodaj opinię</Title>
            <WrapperInside>
                <form onSubmit={handleSubmit}>
                    <ProductDescription>
                        <Image>
                            <img src={productData.prevImg} alt="Prev product" />
                        </Image>
                        <ProductName>
                            <p>{productData.name}</p>
                        </ProductName>
                    </ProductDescription>

                    <Rating>
                        <Description>Oceń produkt</Description>
                        <RatingStars>
                            <StarRating rating={state.rating} handleRating={handleRating} />
                        </RatingStars>
                    </Rating>
                    <Information>
                        <Description>Napisz co myślisz o naszym produkcie</Description>
                        <LittleDescription>
                            Pamiętaj, że twoja opinia powinna dotyczyć produktu i jego funkcjonalności.
                        </LittleDescription>
                    </Information>
                    {/* Check is it logged user*/}

                    {auth.userName === null ? (
                        <AnonymousUser>
                            <UserDescription>Powiedz nam jak się nazywasz</UserDescription>
                            <UserDescriptionSmall>Jak się nazywasz</UserDescriptionSmall>
                            <Input
                                placeholder="Podpis"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </AnonymousUser>
                    ) : (
                        <></>
                    )}
                    <FileSection>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => dispatch({ type: ACTIONS.FILES, payload: e.target.files as FileList })}
                        />

                        <FilesAlert>{state.filesAlert.showAlert ? state.filesAlert.message : <></>}</FilesAlert>
                    </FileSection>

                    <OpinionSection>
                        <TextArea
                            placeholder="Opinia"
                            value={state.opinion}
                            onChange={(e) => dispatch({ type: ACTIONS.OPINION, payload: e.target.value })}
                            maxLength={2000}
                            onChangeCapture={(e) =>
                                changeState(ACTIONS.COUNT_CHAR, (e.target as HTMLTextAreaElement).value.length)
                            }
                        />
                        <NumOfChars>{state.countChar}/2000</NumOfChars>
                    </OpinionSection>
                    <AddComment>
                        <ButtonAddComment name="Submit">
                            <ButtonName>Dodaj opinię</ButtonName>
                        </ButtonAddComment>
                        {state.languageValidation.showAlert ? (
                            <FailureSection>
                                <FailureIcon>
                                    <BiCommentError />
                                </FailureIcon>
                                <FailureDescription>{state.languageValidation.message}</FailureDescription>
                            </FailureSection>
                        ) : (
                            <></>
                        )}
                        {state.alert.showAlert ? (
                            <Alert>
                                {state.alert.userName !== '' && (
                                    <>
                                        {state.alert.userName}
                                        <br />
                                    </>
                                )}
                                {state.alert.opinion !== '' && (
                                    <>
                                        {state.alert.opinion}
                                        <br />
                                    </>
                                )}
                                {state.alert.rating !== '' && <>{state.alert.rating}</>}
                            </Alert>
                        ) : (
                            <></>
                        )}
                    </AddComment>
                </form>
            </WrapperInside>
        </WrapperOutside>
    );
};

export default PopUpAddComment;
