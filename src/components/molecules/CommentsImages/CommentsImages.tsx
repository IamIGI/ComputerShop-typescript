import { Wrapper, Image, OutsideWrapper } from './CommentsImages.style';
import { BASE_URL } from 'data/URL';
import { ScrollButton } from 'components/atoms/ScrollButton/ScrollButton.style';
import Modal from 'components/atoms/Modal/Modal';
import PopUpGallery from 'components/atoms/PopUpGallery/PopUpGallery';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    chosenImageIndex,
    closeGallery,
    getAllCommentsData,
    handleChooseImage,
    isOpenGalleryStatus,
} from 'features/comments/commentsSlice';
import { CommentsResponseInterface } from 'interfaces/Comments.interfaces';

const CommentsImages = () => {
    const dispatchComments = useDispatch();
    const comments = useSelector(getAllCommentsData);
    const chosenImage = useSelector(chosenImageIndex);
    const isOpenGallery = useSelector(isOpenGalleryStatus);

    const sumOfElementsWidth =
        (comments as CommentsResponseInterface).images.length * 90 +
        ((comments as CommentsResponseInterface).images.length - 1) * 20;

    const [divWidth, setDivWidth] = useState<number>(10000);
    setInterval(async () => {
        document.getElementById('container') !== null && setDivWidth(document.getElementById('container')!.offsetWidth);
    }, 2000);

    const scrollCommentImages = (direction: string) => {
        switch (direction) {
            case 'left':
                document.getElementById('container')!.scrollLeft -= 110;
                break;
            case 'right':
                document.getElementById('container')!.scrollLeft += 110;
                break;

            default:
                console.log('bad case value');
                break;
        }
    };

    return (
        <>
            {(comments as CommentsResponseInterface).images.length > 0 && (
                <>
                    <OutsideWrapper>
                        <Wrapper id="container">
                            {(comments as CommentsResponseInterface).images.map((urlImage, index) => (
                                <Image
                                    id={`CommentImage_${index}`}
                                    key={index}
                                    src={`${BASE_URL}/${urlImage}`}
                                    alt="z node"
                                    onClick={() => dispatchComments(handleChooseImage(index))}
                                />
                            ))}
                        </Wrapper>
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
                    </OutsideWrapper>
                    <Modal open={isOpenGallery} onClose={() => dispatchComments(closeGallery())}>
                        <PopUpGallery
                            images={(comments as CommentsResponseInterface).images}
                            addServerPrefix={true}
                            initIndex={chosenImage}
                        />
                    </Modal>
                </>
            )}
        </>
    );
};

export default CommentsImages;
