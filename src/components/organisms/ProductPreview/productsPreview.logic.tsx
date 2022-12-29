const handleNumberOfProducts = (
    windowSize: { width: number; height: number },
    limitTheNumber: boolean,
    numberOfProducts: number
): number => {
    if (!limitTheNumber) return numberOfProducts;
    if (windowSize.width <= 1640 && windowSize.width > 1100) {
        return 2;
    } else if (windowSize.width <= 964 && windowSize.width > 685) {
        return 2;
    } else {
        return 3;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { handleNumberOfProducts };
