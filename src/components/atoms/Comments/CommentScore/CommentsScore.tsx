import { Wrapper, InsideWrapper, ScoreDescription, Icon3, LikeNumber, Alert, Icon4 } from './CommentScore.style';
import { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import useAuth from 'hooks/useAuth';
import { addLike } from 'api/comments';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';
import { refreshComments } from 'features/comments/commentsSlice';
import { AuthContextInterface } from 'context/AuthProvider';
import { ProductDataInterface } from 'interfaces/Product.interfaces';
import { CommentInterface } from 'interfaces/Comments.interfaces';

interface CommentsScoreProps {
    comment: CommentInterface;
}

const CommentsScore = ({ comment }: CommentsScoreProps) => {
    const dispatchStore = useDispatch();
    const product = useSelector(getProductById);

    const { auth } = useAuth() as AuthContextInterface;
    const [notLoggedIn, setNotLoggedIn] = useState<[boolean, string, string]>([false, '', '']);

    const onLikeComment = async (value: [boolean, CommentInterface]) => {
        const data = {
            productId: (product as ProductDataInterface)._id,
            commentId: value[1]._id,
            userId: Boolean(auth.id) ? auth.id : '',
            likes: {
                up: value[0],
            },
        };

        const response = await addLike(data);
        if (response.statusCode === '001') {
            setNotLoggedIn([true, value[1]._id, 'Musisz być zalogowany']);
        } else if (response.statusCode === '002') {
            setNotLoggedIn([true, value[1]._id, 'Możesz tylko zmienić swój wybór']);
        } else {
            setNotLoggedIn([false, '', '']);
            dispatchStore(refreshComments());
        }

        setTimeout(() => {
            setNotLoggedIn([false, '', '']);
        }, 2000);
    };
    return (
        <Wrapper>
            <InsideWrapper>
                <ScoreDescription>Czy ta opinia była pomocna?</ScoreDescription>{' '}
                <Icon3 onClick={() => onLikeComment([true, comment])}>
                    <AiOutlineLike />
                </Icon3>
                <LikeNumber>{comment.likes.up}</LikeNumber>
                <Icon3 onClick={() => onLikeComment([false, comment])}>
                    <AiOutlineDislike />
                </Icon3>
                <LikeNumber>{comment.likes.down}</LikeNumber>
            </InsideWrapper>
            <Alert>{notLoggedIn[0] && notLoggedIn[1] === comment._id ? <>{notLoggedIn[2]}</> : <></>}</Alert>
        </Wrapper>
    );
};

export default CommentsScore;
