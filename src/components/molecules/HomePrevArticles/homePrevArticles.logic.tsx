const handleNumberOfArticles = (windowSize: { width: number; height: number }, initDescriptionSize: number) => {
    if (windowSize.width <= 964 && windowSize.width > 685) {
        return { sizeOfPrevDescr: initDescriptionSize, quantity: 2 };
    } else if (windowSize.width <= 685 && windowSize.width > 475) {
        return { sizeOfPrevDescr: 200, quantity: 1 };
    } else if (windowSize.width <= 475 && windowSize.width > 0) {
        return { sizeOfPrevDescr: 100, quantity: 1 };
    } else {
        return { sizeOfPrevDescr: initDescriptionSize, quantity: 3 };
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { handleNumberOfArticles };
