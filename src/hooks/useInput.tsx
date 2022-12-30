import { ChangeEvent } from 'react';
import useLocalStorage from './useLocalStorage';

const useInput = (
    key: string,
    initValue: string
): [
    value: string,
    reset: () => void,
    attributeObj: { value: string; onChange: (arg0: ChangeEvent<HTMLInputElement>) => void }
] => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const reset = () => {
        setValue(initValue);
    };

    const attributeObj = {
        value,
        onChange: (e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value),
    };

    return [value, reset, attributeObj];
};

export default useInput;
