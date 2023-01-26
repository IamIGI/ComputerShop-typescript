import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import { SectionTitle } from '../DeliveryOptions/DeliveryOptions.style';
import OrderForm from '../OderForm/OderForm';
import { FormWrapper, LoadingWrapper, NoTemplates, Wrapper } from './AccountRecipientTemplate.style';
import { initRecipientDetails } from 'components/templates/Basket/Basket.logic';
import RecipientTemplates from 'components/molecules/RecipientTemplates/RecipientTemplates';
import {
    RecipientFormDataInterface,
    RecipientTemplateInterface,
    RecipientTemplateSchema,
} from 'interfaces/RecipientTemplates.interfaces';
import { selectAuth } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';

const AccountRecipientTemplate = () => {
    const auth = useSelector(selectAuth);
    const axiosPrivate = useAxiosPrivate();
    const [recipientTemplates, setRecipientTemplates] = useState<RecipientTemplateInterface[] | []>([]);
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [recipientFormData, setRecipientFormData] = useState<RecipientFormDataInterface>(initRecipientDetails);
    const [preloadValues, setPreloadValues] = useState<RecipientTemplateInterface | {}>({});

    const handlePreloadValues = (values: RecipientTemplateInterface) => {
        setPreloadValues(values);
    };

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    const handleRecipientFormData = (
        name: string,
        street: string,
        zipCode: string,
        place: string,
        email: string,
        phone: string,
        comment: string,
        recipientId: string
    ) => {
        setRecipientFormData({ name, street, zipCode, place, email, phone, comment, recipientId });
    };

    const handleDelete = (recipientId: string) => {
        const deleteAccountRecipientTemplate = async (data: { userId: string; recipientId: string }) => {
            try {
                await axiosPrivate.delete('/user/template/delete', { headers: {}, data });
                handleRefresh();
            } catch (err) {
                console.log(err);
            }
        };

        const data = {
            userId: auth.id as string,
            recipientId,
        };
        deleteAccountRecipientTemplate(data);
    };

    useEffect(() => {
        if (recipientFormData.name !== '') {
            const addAccountRecipientTemplate = async (data: {
                userId: string;
                recipientTemplate: RecipientTemplateSchema;
            }) => {
                try {
                    await axiosPrivate.post('/user/template/add', data);
                    setRecipientFormData(initRecipientDetails);
                    handleRefresh();
                } catch (err) {
                    console.log(err);
                }
            };

            const editAccountRecipientTemplate = async (data: {
                userId: string;
                recipientId: string;
                recipientTemplate: RecipientFormDataInterface;
            }) => {
                try {
                    await axiosPrivate.post('/user/template/edit', data);
                    setRecipientFormData(initRecipientDetails);
                    handleRefresh();
                } catch (err) {
                    console.log(err);
                }
            };

            if (!recipientFormData.recipientId) {
                const addData = {
                    userId: auth.id as string,
                    recipientTemplate: recipientFormData,
                };
                addAccountRecipientTemplate(addData);
            } else {
                const editData = {
                    userId: auth.id as string,
                    recipientId: recipientFormData.recipientId,
                    recipientTemplate: recipientFormData,
                };

                editAccountRecipientTemplate(editData);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipientFormData]);

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

        getAccountRecipientTemplate(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    return (
        <AccountSettings>
            {waitForFetch ? (
                <LoadingWrapper>
                    <LoadingAnimation loadingSize={15} />
                </LoadingWrapper>
            ) : (
                <Wrapper>
                    <SectionTitle>
                        <SectionDescription title={'Szablony odbiorców'} icon={<BsPersonLinesFill />} />
                    </SectionTitle>
                    {recipientTemplates.length === 0 ? (
                        <NoTemplates>Nie masz stworzonych żadnych szablonów</NoTemplates>
                    ) : (
                        <RecipientTemplates
                            showOptions={true}
                            recipientTemplates={recipientTemplates}
                            handlePreloadValues={handlePreloadValues}
                            handleDelete={handleDelete}
                        />
                    )}

                    {recipientTemplates.length < 4 && (
                        <FormWrapper>
                            <h2>Dodaj nowy szablon</h2>
                            <OrderForm
                                accountRecipientTemplate={true}
                                handlePreloadValues={handlePreloadValues}
                                preloadedValues={preloadValues}
                                handleOrderData={handleRecipientFormData}
                            />
                        </FormWrapper>
                    )}
                </Wrapper>
            )}
        </AccountSettings>
    );
};

export default AccountRecipientTemplate;
