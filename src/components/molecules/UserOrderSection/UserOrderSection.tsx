import { OrderSectionTitle } from 'components/organisms/AccountOrderHistoryItem/AccountOrderHistoryItem.style';
import { BASE_URL } from 'data/URL';
import { OrderSection, UserDataDescription } from './UserOrderSection.style';
import { OrderDataInterface } from 'interfaces/Order.interfaces';

interface UserOrderSectionProps {
    title: string;
    value: OrderDataInterface;
}

const UserOrderSection = ({ value, title }: UserOrderSectionProps) => {
    return (
        <OrderSection>
            <OrderSectionTitle>{title}</OrderSectionTitle>
            <UserDataDescription>
                <ul>
                    <li>
                        <b>{value.transactionInfo.recipientDetails.name}</b>
                    </li>
                    <li>tel. {value.transactionInfo.recipientDetails.phone}</li>
                    <li>e-mail: {value.transactionInfo.recipientDetails.email}</li>
                    <li>
                        {' '}
                        <a href={`${BASE_URL}/order/pdf/${value._id}`}>Pobierz dokument faktury </a>
                    </li>
                </ul>
            </UserDataDescription>
        </OrderSection>
    );
};

export default UserOrderSection;
