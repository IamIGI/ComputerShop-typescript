import { handleFilters } from 'features/products/productsSlice';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { SearchButton, SearchDescription, SearchField, SearchSection } from './SearchTermField.style';

interface SearchTermFieldProps {
    clearSearchField: boolean;
}

const SearchTermField = ({ clearSearchField }: SearchTermFieldProps) => {
    const dispatch = useDispatch();
    const [searchField, setSearchFiled] = useState<string>('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(handleFilters({ name: 'searchTerm', value: searchField }));
        }, 1200);

        return () => clearTimeout(delayDebounceFn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchField]);

    useEffect(() => {
        setSearchFiled('');
    }, [clearSearchField]);

    const saveSearchField = () => {
        dispatch(handleFilters({ name: 'searchTerm', value: searchField }));
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            saveSearchField();
        }
    };

    return (
        <SearchSection>
            <SearchField
                placeholder="Czego szukasz?"
                value={searchField}
                onChange={(e) => setSearchFiled(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <SearchButton onClick={() => saveSearchField()}>
                <BsSearch />
            </SearchButton>
            <SearchDescription>Wyszukiwanie</SearchDescription>
        </SearchSection>
    );
};

export default SearchTermField;
