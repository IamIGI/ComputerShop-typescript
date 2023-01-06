import { ScrollButton } from 'components/atoms/ScrollButton/ScrollButton.style';
import { useEffect, useState } from 'react';
import { Wrapper, ImageContainer, SmallImagesContainer, SmallImage, SmallImageWrapper } from './PopUpGallery.style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BASE_URL } from 'data/URL';

interface PopUpGalleryProps {
    images: string[];
    addServerPrefix: boolean;
    initIndex: number;
}

const PopUpGallery = ({ images, addServerPrefix = false, initIndex }: PopUpGalleryProps) => {
    const [index, setIndex] = useState<number>(initIndex);
    const sumOfElementsWidth = images.length * 90 + (images.length - 1) * 20;
    const [divWidth, setDivWidth] = useState(10000);

    useEffect(() => {
        const timer = setInterval(async () => {
            if (document.getElementById('containerBigImage') !== null) {
                setDivWidth(document.getElementById('containerBigImage')!.offsetWidth);
            }
        }, 2000);

        return () => {
            //clear timeouts and intervals, otherwise it is still working. Even if you close component
            clearInterval(timer);
        };
    }, []);

    const scrollCommentImages = (direction: string) => {
        switch (direction) {
            case 'left':
                document.getElementById('containerBigImage')!.scrollLeft -= 110;
                break;
            case 'right':
                document.getElementById('containerBigImage')!.scrollLeft += 110;
                break;

            default:
                console.log('bad case value');
                break;
        }
    };

    return (
        <Wrapper>
            <ImageContainer>
                <img
                    src={addServerPrefix ? `${BASE_URL}/${images[index]}` : images[index]}
                    alt="Show product"
                    key={index}
                />
            </ImageContainer>
            <SmallImageWrapper>
                <SmallImagesContainer id="containerBigImage">
                    {images.map((item, i) => (
                        <SmallImage
                            key={i}
                            src={addServerPrefix ? `${BASE_URL}/${item}` : item}
                            alt="products gallery"
                            onMouseEnter={() => setIndex(i)}
                            border={i === index ? true : false}
                        />
                    ))}
                </SmallImagesContainer>
                <ScrollButton
                    childWidth={sumOfElementsWidth}
                    parentWidth={divWidth}
                    direction="right"
                    onClick={() => scrollCommentImages('right')}
                >
                    <AiOutlineRight />
                </ScrollButton>
                <ScrollButton
                    childWidth={sumOfElementsWidth}
                    parentWidth={divWidth}
                    direction="left"
                    onClick={() => scrollCommentImages('left')}
                >
                    <AiOutlineLeft />
                </ScrollButton>
            </SmallImageWrapper>
        </Wrapper>
    );
};

export default PopUpGallery;
