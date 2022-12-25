import { filtersSchemaDropDownMenu } from 'interfaces/GLOBAL.interfaces';
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
} from './SetFilterItems.style';

interface SetFilterItemsProps {
    width: string;
    description: string;
    filterData: filtersSchemaDropDownMenu[];
    handleItems: (arg0: filtersSchemaDropDownMenu[]) => void; // may be like that
    clearItems?: boolean;
    handleClearItems?: () => void;
    OneTimeChoice: boolean;
    displayCheckbox?: boolean; // may no need cuz there is default value set
    selectOptionsInCenter?: boolean;
    afterClickWrap?: boolean;
    showConfirmButtonOnSmallScreen?: boolean;
    handleReset?: (arg0: boolean) => void;
    reset?: boolean;
}

const SetFilterItems = ({
    width,
    description,
    filterData,
    handleItems,
    clearItems,
    handleClearItems,
    OneTimeChoice = false,
    displayCheckbox = false,
    selectOptionsInCenter = false,
    afterClickWrap = false,
    showConfirmButtonOnSmallScreen = false,
    handleReset,
    reset,
}: SetFilterItemsProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [check, setCheck] = useState<filtersSchemaDropDownMenu[]>(filterData); // to think
    const [quantity, setQuantity] = useState<number>(0);
    const [placeholder, setPlaceHolder] = useState<string>(OneTimeChoice ? filterData[0].label : '');

    useEffect(() => {
        if (reset) {
            setCheck(filterData);
            setPlaceHolder(filterData[0].label);
            handleReset !== undefined && handleReset(false);
        }
    }, [reset]);

    const handleCheck = (key: number, value: boolean) => {
        if (!OneTimeChoice) {
            setCheck((prevValues) =>
                prevValues.map((obj) => {
                    if (obj.value === key) {
                        return { ...obj, checked: !value };
                    }
                    return obj;
                })
            );
        } else {
            setCheck(
                filterData.map((obj) => {
                    if (obj.value === key) {
                        setPlaceHolder(obj.label);
                        return { ...obj, checked: !value };
                    }
                    return obj;
                })
            );
        }

        if (afterClickWrap) setToggle(false);
    };

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked) ++count;
        }
        setQuantity(count);
        handleItems(check);

        if (clearItems) {
            setCheck(filterData);
            handleItems(check);
            handleClearItems !== undefined && handleClearItems();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [check, clearItems]);

    return (
        <Wrapper>
            <InputSection>
                <InputField
                    display={toggle ? 'true' : undefined}
                    width={width}
                    placeholder={OneTimeChoice ? placeholder : 'Wybierz'}
                    onClick={() => {
                        setToggle(true);
                    }}
                />
                <InputDescription>
                    {description} {!OneTimeChoice && quantity !== 0 && `(${quantity})`}
                </InputDescription>
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

export default SetFilterItems;
