import { Wrapper, SectionTitle, LoadingWrapper, RecipientTemplatesWrapper } from './RecipientDetails.style';
import OrderForm from 'components/organisms/OderForm/OderForm';
import OrderComment from 'components/molecules/OrderComment/OrderComment';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { CgUserList } from 'react-icons/cg';
import { useState } from 'react';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import RecipientTemplates from 'components/molecules/RecipientTemplates/RecipientTemplates';
import { useEffect } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { RecipientTemplateInterface } from 'interfaces/RecipientTemplates.interfaces';
import { selectAuth } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';

interface RecipientDetailsProps {
    handleOrderData: (
        name: string,
        street: string,
        zipCode: string,
        place: string,
        email: string,
        phone: string,
        comment: string,
        recipientId: string
    ) => void;
}

const RecipientDetails = ({ handleOrderData }: RecipientDetailsProps) => {
    const auth = useSelector(selectAuth);
    const axiosPrivate = useAxiosPrivate();
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);
    const [recipientTemplates, setRecipientTemplates] = useState<RecipientTemplateInterface[] | []>([]);
    const [comment, setComment] = useState<string>('');
    const [preloadValues, setPreloadValues] = useState<RecipientTemplateInterface | {}>({});

    const handlePreloadValues = (values: RecipientTemplateInterface) => {
        setPreloadValues(values);
    };

    const handleOrderComment = (data: string) => {
        setComment(data);
    };

    useEffect(() => {
        const getAccountRecipientTemplate = async (data: { userId: string }) => {
            try {
                setWaitForFetch(true);
                const response = await axiosPrivate.post('user/template/get', data);
                setRecipientTemplates(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log(err);
            }
        };
        const data = {
            userId: auth.id as string,
        };

        auth.id !== null && getAccountRecipientTemplate(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.id]);

    return (
        <>
            <SectionTitle id="recipient">
                <SectionDescription title={'Dane Odbiorcy'} icon={<CgUserList />} />
            </SectionTitle>
            <Wrapper>
                {Boolean(auth.id) && (
                    <RecipientTemplatesWrapper>
                        {waitForFetch ? (
                            <LoadingWrapper>
                                <LoadingAnimation loadingSize={15} />
                            </LoadingWrapper>
                        ) : (
                            <RecipientTemplates
                                showOptions={false}
                                recipientTemplates={recipientTemplates}
                                handlePreloadValues={handlePreloadValues}
                            />
                        )}
                    </RecipientTemplatesWrapper>
                )}

                <OrderForm
                    handleOrderData={handleOrderData}
                    comment={comment}
                    accountRecipientTemplate={true}
                    handleOrderComment={handleOrderComment}
                    preloadedValues={preloadValues}
                />
                <OrderComment comment={comment} handleOrderComment={handleOrderComment} />
            </Wrapper>
        </>
    );
};

export default RecipientDetails;
