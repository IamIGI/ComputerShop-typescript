import { Wrapper, InputLocal, ButtonWrapper, Error } from './OrderForm.style';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { recipientDetails } from 'data/FormSchema';
import { useEffect } from 'react';
import {
    RecipientFormDataInterface,
    RecipientTemplateInterface,
    RecipientTemplateSchema,
} from 'interfaces/RecipientTemplates.interfaces';

interface OrderFormProps {
    accountRecipientTemplate: boolean;
    handlePreloadValues?: (arg0: RecipientTemplateInterface) => void;
    handleOrderData: (arg0: RecipientFormDataInterface) => void;
    comment: string;
    handleOrderComment: (arg0: string) => void;
    preloadedValues: RecipientTemplateInterface | {};
}

const OrderForm = ({
    accountRecipientTemplate = false,
    handlePreloadValues,
    handleOrderData,
    comment = '',
    handleOrderComment,
    preloadedValues = {},
}: OrderFormProps) => {
    useEffect(() => {
        accountRecipientTemplate && Object.keys(preloadedValues).length !== 0 && reset(preloadedValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preloadedValues]);

    //form logic
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RecipientTemplateInterface>({
        defaultValues: preloadedValues,
        resolver: yupResolver(recipientDetails),
    });

    //there could be issue with that (data)
    const onSubmit = (data: RecipientTemplateSchema) => {
        const orderObject = {
            name: data.name,
            street: data.street,
            zipCode: data.zipCode,
            place: data.place,
            email: data.email,
            phone: data.phone,
            comment: comment,
            recipientId: (preloadedValues as RecipientTemplateInterface)._id,
        };
        handleOrderData(orderObject);
        //clear data
        reset({ name: '', street: '', zipCode: '', place: '', email: '', phone: '' });
        if (accountRecipientTemplate) {
            handlePreloadValues!({
                _id: '',
                name: '',
                street: '',
                zipCode: '',
                place: '',
                email: '',
                phone: '',
            });
        }

        handleOrderComment('');
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLocal placeholder="Imie i nazwisko lub nazwa firmy" {...register('name')} name="name" />
                <Error>{errors.name && 'Tylko litery'}</Error>
                <InputLocal placeholder="Ulica i numer" {...register('street')} name="street" />
                <Error>{errors.street && 'Uzupełnij pole'}</Error>
                <InputLocal placeholder="Kod pocztowy (xx-xxx)" {...register('zipCode')} name="zipCode" />
                <Error>{errors.zipCode && 'Wpisz poprawny numer pocztowy'}</Error>
                <InputLocal placeholder="Miejscowosc" {...register('place')} name="place" />
                <Error>{errors.place && 'Uzupełnij pole'}</Error>
                <InputLocal placeholder="E-mail" {...register('email')} name="email" />
                <Error>{errors.email && 'Wpisz poprawny adres email'}</Error>
                <InputLocal placeholder="Telefon" {...register('phone')} name="phone" />
                <Error>{errors.phone && 'Wpisz poprawny numer'}</Error>
                <ButtonWrapper>
                    {accountRecipientTemplate && Object.keys(preloadedValues).length === 0 ? (
                        <Button type="submit"> Zapisz </Button>
                    ) : (
                        <Button type="submit"> Użyj </Button>
                    )}
                </ButtonWrapper>
            </form>
        </Wrapper>
    );
};

export default OrderForm;
