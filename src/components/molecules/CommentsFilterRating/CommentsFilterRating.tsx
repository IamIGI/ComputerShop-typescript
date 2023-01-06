import { FiltersDropDownListInterface } from 'interfaces/GLOBAL.interfaces';
import { useEffect, useState } from 'react';
import {
    ApproveButton,
    Checkbox,
    FilterOption,
    FilterOptions,
    InputDescription,
    InputField,
    InputSection,
    OptionDescription,
    SmallScreen,
    Wrapper,
} from 'components/atoms/SetFilterItems/SetFilterItems.style';
import { useAppSelector } from 'app/hooks';
import { getCommentsFiltersRating } from 'features/comments/commentsSlice';

interface CommentsFilterRatingProps {
    width: string;

    filterData: FiltersDropDownListInterface[];
    handleItems: (arg0: FiltersDropDownListInterface[]) => void; // maybe like that
    displayCheckbox?: boolean; // may no need cuz there is default value set
    selectOptionsInCenter?: boolean;
    afterClickWrap?: boolean;
    showConfirmButtonOnSmallScreen?: boolean;
    handleReset?: (arg0: boolean) => void;
    reset?: boolean;
}

const CommentsFilterRating = ({
    width,
    filterData,
    handleItems,
    displayCheckbox = false,
    selectOptionsInCenter = false,
    afterClickWrap = false,
    showConfirmButtonOnSmallScreen = false,
    handleReset,
    reset,
}: CommentsFilterRatingProps) => {
    const rating = useAppSelector(getCommentsFiltersRating);
    const [toggle, setToggle] = useState<boolean>(false);
    const [check, setCheck] = useState<FiltersDropDownListInterface[]>(rating); // to think
    const [placeholder, setPlaceHolder] = useState<string>(filterData[0].label);

    useEffect(() => {
        setCheck(rating);
        rating.map((obj) => {
            if (obj.checked) setPlaceHolder(obj.label);
        });
    }, [rating]);

    useEffect(() => {
        if (reset) {
            setCheck(filterData);
            setPlaceHolder(filterData[0].label);
            handleReset !== undefined && handleReset(false);
        }
    }, [reset]);

    const handleCheck = (key: number, value: boolean) => {
        setCheck(
            filterData.map((obj) => {
                if (obj.value === key) {
                    setPlaceHolder(obj.label);
                    return { ...obj, checked: !value };
                }
                return obj;
            })
        );

        if (afterClickWrap) setToggle(false);
    };

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked) ++count;
        }

        handleItems(check);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [check]);

    return (
        <Wrapper>
            <InputSection>
                <InputField
                    display={toggle ? 'true' : undefined}
                    width={width}
                    placeholder={placeholder}
                    onClick={() => {
                        setToggle(true);
                    }}
                />
                <InputDescription>Oceny</InputDescription>
                <FilterOptions
                    display={toggle ? 'true' : undefined}
                    width={width}
                    onMouseLeave={() => setToggle(false)}
                >
                    {check.map((item) => (
                        <FilterOption
                            activeChoice={item.checked}
                            selectOptionsInCenter={selectOptionsInCenter}
                            key={item.label}
                            onClick={() => handleCheck(item.value as number, item.checked)}
                        >
                            {displayCheckbox && <Checkbox type="checkbox" checked={item.checked} readOnly={true} />}
                            <OptionDescription>{item.label}</OptionDescription>
                        </FilterOption>
                    ))}
                    <SmallScreen
                        showConfirmButtonOnSmallScreen={showConfirmButtonOnSmallScreen}
                        onClick={() => setToggle(false)}
                    >
                        <ApproveButton>Zatwierdź</ApproveButton>
                    </SmallScreen>
                </FilterOptions>
            </InputSection>
        </Wrapper>
    );
};

export default CommentsFilterRating;
