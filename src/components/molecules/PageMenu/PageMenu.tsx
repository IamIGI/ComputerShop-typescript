import { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { PageButton } from './PageMenu.style';
import useWindowSize from 'hooks/useWindowSize';

function showButtons(arrayOfPages: number[], currentPage: number, numberOfButtons: number) {
    if (arrayOfPages.length - currentPage < numberOfButtons) return arrayOfPages.slice(-numberOfButtons);
    return arrayOfPages.slice(currentPage - 1, currentPage - 1 + numberOfButtons);
}

function handleNumberOfButtons(windowSize: { width: number; height: number }) {
    if (windowSize.width <= 470) {
        return 4;
    } else {
        return 5;
    }
}

interface PageMenuProps {
    countPageButtons: number[];
    pageNr: number;
    buttonClicked: (arg0: number) => void;
}

const PageMenu = ({ countPageButtons, pageNr, buttonClicked }: PageMenuProps) => {
    const windowSize = useWindowSize();
    const [numberOfButtons, setNumberOfButtons] = useState<number>(5);

    useEffect(() => {
        setNumberOfButtons(handleNumberOfButtons(windowSize));
    }, [windowSize]);

    return (
        <>
            {countPageButtons.length > 5 && (
                <PageButton
                    onClick={() => {
                        pageNr === 1 ? buttonClicked(pageNr) : buttonClicked(pageNr - 1);
                    }}
                >
                    <AiOutlineLeft />
                </PageButton>
            )}
            {showButtons(countPageButtons, pageNr, numberOfButtons).map((item, index) => (
                <PageButton currentPage={item === pageNr} key={index} onClick={() => buttonClicked(item)}>
                    {item}
                </PageButton>
            ))}

            {countPageButtons.length > 5 && (
                <PageButton
                    onClick={() => {
                        pageNr === countPageButtons.length ? buttonClicked(pageNr) : buttonClicked(pageNr + 1);
                    }}
                >
                    <AiOutlineRight />
                </PageButton>
            )}
        </>
    );
};

export default PageMenu;
