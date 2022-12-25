import { ChangeEvent } from 'react';
import { InputSection, InputDescription, InputField } from './InputWithDescription.style';

interface InputWithDescriptionProps {
    value: string;
    handleInput: (e: string) => void;
    placeholder: string;
    description: string;
    type: string;
}

const InputWithDescription = ({
    value,
    handleInput,
    placeholder,
    description,
    type = 'search',
}: InputWithDescriptionProps) => {
    return (
        <InputSection>
            <InputField
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
            />
            <InputDescription>{description}</InputDescription>
        </InputSection>
    );
};

export default InputWithDescription;
