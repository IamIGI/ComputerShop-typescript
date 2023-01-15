import ProductAverageScore from 'components/molecules/ProductAverageScore/ProductAverageScore';
import ProductEachScore from 'components/molecules/ProductEachScore/ProductEachScore';
import { useEffect } from 'react';
import { NoComments, Wrapper, InsideWrapper } from './ProductSummary.style';
import { useState } from 'react';
import ProductAddComment from 'components/molecules/ProductAddComment/ProductAddComment';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BsArrowRight } from 'react-icons/bs';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAddComment from 'components/molecules/PopUpAddComment/PopUpAddComment';
import { useSelector } from 'react-redux';
import {
    fetchAverageScore,
    getAllCommentsData,
    getAverageScoreStatus,
    // getCommentsErrors,
    getCommentsStatus,
} from 'features/comments/commentsSlice';
import { store } from 'app/store';
import { CommentsResponseInterface } from 'interfaces/Comments.interfaces';
import { getProductById } from 'features/products/productsSlice';
import { ProductDataInterface } from 'interfaces/Product.interfaces';

const ProductSummary = () => {
    const comments = useSelector(getAllCommentsData) as CommentsResponseInterface;
    const commentsStatus = useSelector(getCommentsStatus);
    const averageScoreStatus = useSelector(getAverageScoreStatus);
    const product = useSelector(getProductById);
    // const errors = useSelector(getCommentsErrors);
    const [isOpen, setIsOpen] = useState<[boolean]>([false]);

    const handleOpen = () => {
        setIsOpen([true]);
    };

    useEffect(() => {
        store.dispatch(fetchAverageScore());
    }, []);

    return (
        <Wrapper>
            {averageScoreStatus === 'loading' ? (
                <LoadingAnimation loadingSize={10} />
            ) : averageScoreStatus === 'succeeded' ? (
                <>
                    {commentsStatus === 'succeeded' && comments?.length_AllComments === 0 ? (
                        <NoComments>
                            <p>
                                Masz ten produkt? <br /> Bądź pierwszą osobą która skomentuje
                            </p>
                            <div>
                                <BsArrowRight />
                            </div>
                        </NoComments>
                    ) : (
                        <InsideWrapper>
                            <ProductAverageScore />
                            <ProductEachScore errorFix={comments.length_AllComments} />
                        </InsideWrapper>
                    )}
                </>
            ) : (
                <></>
            )}
            <ProductAddComment handleOpen={handleOpen} />
            <Modal open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpAddComment
                    onClose={() => setIsOpen([false])}
                    productData={{
                        _id: (product as ProductDataInterface)._id,
                        name: (product as ProductDataInterface).name,
                        prevImg: (product as ProductDataInterface).prevImg,
                    }}
                />
            </Modal>
        </Wrapper>
    );
};

export default ProductSummary;
