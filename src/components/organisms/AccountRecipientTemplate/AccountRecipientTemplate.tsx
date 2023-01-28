import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import { SectionTitle } from '../DeliveryOptions/DeliveryOptions.style';
import OrderForm from '../OderForm/OderForm';
import { FormWrapper, LoadingWrapper, NoTemplates, Wrapper } from './AccountRecipientTemplate.style';
import { initRecipientDetails } from 'components/templates/Basket/Basket.logic';
import RecipientTemplates from 'components/molecules/RecipientTemplates/RecipientTemplates';
import { RecipientFormDataInterface, RecipientTemplateInterface } from 'interfaces/RecipientTemplates.interfaces';
import { selectAuth } from 'features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    accountTemplatesRefresh,
    addAccountTemplate,
    deleteAccountTemplate,
    editAccountTemplate,
    fetchAccountTemplates,
    getUserTemplates,
    getUserTemplatesError,
    getUserTemplatesStatus,
    refreshAccountTemplates,
} from 'features/account/templates/accountTemplatesSlice';
import { store } from 'app/store';
import { useAppSelector } from 'app/hooks';

const AccountRecipientTemplate = () => {
    const dispatch = useDispatch();

    const refresh = useSelector(accountTemplatesRefresh);
    useEffect(() => {
        store.dispatch(fetchAccountTemplates());
    }, [refresh]);

    const auth = useAppSelector(selectAuth);
    const recipientTemplates = useAppSelector(getUserTemplates);
    const status = useAppSelector(getUserTemplatesStatus);
    const error = useAppSelector(getUserTemplatesError);

    const [recipientFormData, setRecipientFormData] = useState<RecipientFormDataInterface>(initRecipientDetails);

    //Do not move that state!!!
    const [preloadValues, setPreloadValues] = useState<RecipientTemplateInterface | {}>({});

    const handlePreloadValues = (values: RecipientTemplateInterface) => {
        setPreloadValues(values);
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

    const handleDelete = async (recipientId: string) => {
        const data = {
            userId: auth.id as string,
            recipientId,
        };

        await store.dispatch(deleteAccountTemplate(data));
        dispatch(refreshAccountTemplates());
    };

    useEffect(() => {
        const updateTemplates = async () => {
            if (recipientFormData.name !== '') {
                if (!recipientFormData.recipientId) {
                    const addData = {
                        userId: auth.id as string,
                        recipientTemplate: recipientFormData,
                    };
                    await store.dispatch(addAccountTemplate(addData));
                } else {
                    const editData = {
                        userId: auth.id as string,
                        recipientId: recipientFormData.recipientId,
                        recipientTemplate: recipientFormData,
                    };
                    await store.dispatch(editAccountTemplate(editData));
                }
                dispatch(refreshAccountTemplates());
            }
        };

        updateTemplates();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipientFormData]);

    return (
        <AccountSettings>
            {status === 'loading' ? (
                <LoadingWrapper>
                    <LoadingAnimation loadingSize={15} />
                </LoadingWrapper>
            ) : status === 'succeeded' ? (
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
            ) : (
                <p>{error}</p>
            )}
        </AccountSettings>
    );
};

export default AccountRecipientTemplate;
