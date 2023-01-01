import { FiltersDropDownListInterface } from 'interfaces/GLOBAL.interfaces';

export const ratingOptions: FiltersDropDownListInterface[] = [
    { label: 'Wszystkie oceny', value: 0, checked: false },
    { label: '1 gwiazdka', value: 1, checked: false },
    { label: '2 gwiazdka', value: 2, checked: false },
    { label: '3 gwiazdka', value: 3, checked: false },
    { label: '4 gwiazdka', value: 4, checked: false },
    { label: '5 gwiazdka', value: 5, checked: false },
    { label: '6 gwiazdka', value: 6, checked: false },
];

export const filterOptions: FiltersDropDownListInterface[] = [
    { label: 'Najnowsze', value: 'date', checked: false },
    { label: 'Najstarsze', value: '-date', checked: false },
    { label: 'Najbardziej pomocne', value: 'likes.up', checked: false },
    { label: 'Najwyższe oceny', value: 'content.rating', checked: false },
    { label: 'Najniższe oceny', value: '-content.rating', checked: false },
];
