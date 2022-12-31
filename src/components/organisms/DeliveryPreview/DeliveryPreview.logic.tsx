import { DeliveryOptionsInterface, PaymentOptionsInterface } from 'interfaces/Order.interfaces';

export function getDeliveryDate(getWeekDay?: boolean) {
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    } as const;
    if (getWeekDay) (options as { year: string; month: string; day: string; weekday: string }).weekday = 'long';
    let deliveryDate = new Date();
    const deliveryDay = deliveryDate.getDay() + 2;

    if (deliveryDay === 6 || deliveryDay === 7) {
        deliveryDate = new Date(
            deliveryDate.setDate(deliveryDate.getDate() + ((7 - deliveryDate.getDay() + 1) % 7 || 7))
        );
    } else {
        deliveryDate = new Date(deliveryDate.setDate(deliveryDate.getDate() + 2));
    }

    return deliveryDate.toLocaleDateString(undefined, options);
}

export const showPaymentMethod = (deliveryCheckboxesPay: PaymentOptionsInterface) => {
    let deliveryOptionPay = '';
    let deliveryDescriptionPay = '';

    // eslint-disable-next-line array-callback-return
    Object.values(deliveryCheckboxesPay).map((x, index) => {
        if (x === true) {
            deliveryOptionPay = Object.keys(deliveryCheckboxesPay)[index];
        }
    });

    switch (deliveryOptionPay) {
        case 'online':
            deliveryDescriptionPay = 'Płatność online';
            break;
        case 'card':
            deliveryDescriptionPay = 'Karta płatnicza online';
            break;
        case 'cash':
            deliveryDescriptionPay = 'Przelew gotówkowy';
            break;
        case 'uponReceipt':
            deliveryDescriptionPay = 'Przy odbiorze';
            break;
        case 'installment':
            deliveryDescriptionPay = 'Raty';
            break;

        default:
            deliveryDescriptionPay = 'Wybierz metode płatności';
            break;
    }

    return deliveryDescriptionPay;
};

export const showDeliveryMethod = (deliveryCheckboxesOpt: DeliveryOptionsInterface) => {
    let deliveryOptionOpt = '';
    let deliveryDescriptionOpt = '';

    // eslint-disable-next-line array-callback-return
    Object.values(deliveryCheckboxesOpt).map((x, index) => {
        if (x === true) {
            deliveryOptionOpt = Object.keys(deliveryCheckboxesOpt)[index];
        }
    });

    switch (deliveryOptionOpt) {
        case 'deliveryMan':
            deliveryDescriptionOpt = 'Kurier';
            break;
        case 'atTheSalon':
            deliveryDescriptionOpt = 'Odbiór w salonie';
            break;
        case 'locker':
            deliveryDescriptionOpt = 'Paczkomat 24/7';
            break;

        default:
            deliveryDescriptionOpt = 'Wybierz metodę dostawy';
            break;
    }

    return deliveryDescriptionOpt;
};
