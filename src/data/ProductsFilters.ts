interface Filters {
    label: string;
    value: string;
    checked: boolean;
}

export const Producers: Filters[] = [
    { label: 'Apple', value: 'Apple', checked: false },
    { label: 'Asus', value: 'Asus', checked: false },
    { label: 'HP', value: 'HP', checked: false },
    { label: 'Dell', value: 'Dell', checked: false },
    { label: 'MSI', value: 'MSI', checked: false },
    { label: 'Microsoft', value: 'Microsoft', checked: false },
];

export const Processors: Filters[] = [
    { label: 'Intel Core i3', value: 'INTEL-3', checked: false },
    { label: 'Intel Core i5', value: 'INTEL-5', checked: false },
    { label: 'Intel Core i7', value: 'INTEL-7', checked: false },
    { label: 'AMD Ryzen 5', value: 'AMD-5', checked: false },
    { label: 'Apple M1 Pro', value: 'APPLE-10', checked: false },
    { label: 'Apple M1', value: 'APPLE-8', checked: false },
];

export const filterOptions: Filters[] = [
    { label: 'Brak sortowania', value: 'none', checked: false },
    { label: 'Najpopularniejsze', value: 'popular', checked: false },
    { label: 'Najlepiej oceniane', value: 'rating', checked: false },
    { label: 'Cena: od najtańszych', value: '-price', checked: false },
    { label: 'Cena: od najdroższych', value: 'price', checked: false },
];
