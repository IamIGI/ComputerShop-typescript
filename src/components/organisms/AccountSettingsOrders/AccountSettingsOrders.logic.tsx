//set right status name
export const getStatus = (number: number): string | undefined => {
    switch (number) {
        case 1:
            return 'W realizacji';
        case 2:
            return 'Wysłane';
        case 3:
            return 'Zakończone';
        default:
            console.log('Bad number status given');
            break;
    }
};
//set right month name
export const getDate = (date: string): string => {
    let day = date.split('.')[2];
    let month = date.split('.')[1];
    let year = date.split('.')[0];
    let monthName = '';
    switch (month) {
        case '01':
            monthName = 'Styczeń';
            break;
        case '02':
            monthName = 'Luty';
            break;
        case '03':
            monthName = 'Marzec';
            break;
        case '04':
            monthName = 'Kwiecień';
            break;
        case '05':
            monthName = 'Maj';
            break;
        case '06':
            monthName = 'Czerwiec';
            break;
        case '07':
            monthName = 'Lipiec';
            break;
        case '08':
            monthName = 'Sierpień';
            break;
        case '09':
            monthName = 'Wrzesień';
            break;
        case '10':
            monthName = 'Październik';
            break;
        case '11':
            monthName = 'Listopad';
            break;
        case '12':
            monthName = 'Grudzień';
            break;
        default:
            console.log('Bad date given');
            break;
    }
    return `${day} ${monthName} ${year}`;
};
