import { AddComment, Description, Wrapper, Icon } from './ProductAddComment.style';
import { BuyButton } from '../ProductBuyContent/ProductBuyContent.style';
import { useEffect, useState } from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';
import { getAllCommentsData } from 'features/comments/commentsSlice';
import { CommentInterface, CommentsResponseInterface } from 'interfaces/Comments.interfaces';
import { ProductDataInterface } from 'interfaces/Product.interfaces';
import { selectAuth } from 'features/auth/authSlice';

interface ProductAddCommentProps {
    handleOpen: () => void;
}

const ProductAddComment = ({ handleOpen }: ProductAddCommentProps) => {
    const auth = useSelector(selectAuth);
    const commentsData = useSelector(getAllCommentsData) as CommentsResponseInterface;

    const product = useSelector(getProductById);
    const [userAlreadyCommented, setUserAlreadyCommented] = useState(false);

    useEffect(() => {
        if (Object.keys(commentsData).length !== 0) {
            for (let i = 0; i < (commentsData.comments as CommentInterface[]).length; i++) {
                const userId = (commentsData.comments as CommentInterface[])[i].userId;
                if (userId === auth.id) {
                    setUserAlreadyCommented(true);
                    break;
                }
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [commentsData]); //Maybe fix required

    return (
        <Wrapper>
            <Description>
                <h2>Masz ten produkt?</h2>
                <p>Oceń {(product as ProductDataInterface).name} i pomóż innym w wyborze</p>
            </Description>
            <AddComment>
                {userAlreadyCommented ? (
                    <>
                        <p>Dziękujemy za opinię </p>
                        <Icon>
                            <FiThumbsUp />
                        </Icon>
                    </>
                ) : (
                    <BuyButton onClick={handleOpen}>Dodaj opinię</BuyButton>
                )}
            </AddComment>
        </Wrapper>
    );
};

export default ProductAddComment;
