import useLocalStorage from './useLocalStorage';

const useMultiCheckboxMemory = (key: string, initValue: any) => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const changeValue = (newValue: any) => {
        setValue(newValue);
    };

    return [value, changeValue];
};

export default useMultiCheckboxMemory;
