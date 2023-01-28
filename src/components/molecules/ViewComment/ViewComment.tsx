import ContentData from 'components/atoms/Comments/ContentData/ContentData';
import Opinion from 'components/atoms/Comments/Opinion/Opinion';
import UserData from 'components/atoms/Comments/UserData/UserData';
import CommentsScore from 'components/atoms/Comments/CommentScore/CommentsScore';
import {
    BigScreen,
    CommentSection,
    ContentSection,
    Image,
    ImagesSection,
    InsideWrapper,
    ProductImage,
    ProductWrapper,
    SmallScreen,
    UserDataWhenSmallScreen,
} from './ViewComment.style';
import { CommentInterface } from 'interfaces/Comments.interfaces';
import { BASE_URL } from 'data/URL';
import { AppDispatch } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
import { handleChooseImage } from 'features/comments/commentsSlice';
import { useEffect, useState } from 'react';
import { getProduct } from 'api/products';
import { ProductDataInterface } from 'interfaces/Product.interfaces';
import {
    AdditionalHoverMenu,
    DescriptionHandyMenu,
    HandyMenu,
    IconHandyMenu,
} from 'components/organisms/AccountSettingsOrders/AccountSettingsOrders.style';
import { HiDotsVertical } from 'react-icons/hi';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { selectAuth } from 'features/auth/authSlice';
import { refreshAccountComments } from 'features/account/accountSlice';

interface ViewCommentInterface {
    comment: CommentInterface;
    images: string[];
    userComments?: { isTrue: boolean; productId: string };
    refreshAccountOpinions?: boolean;
}

const ViewComment = ({ comment, images, userComments, refreshAccountOpinions }: ViewCommentInterface) => {
    const dispatch = useDispatch<AppDispatch>();
    const axiosPrivate = useAxiosPrivate();
    const auth = useSelector(selectAuth);

    const [product, setProduct] = useState<ProductDataInterface | {}>({});
    const [showHandyOptions, setShowHandyOptions] = useState<string>('');

    const findImage = (url: string) => {
        const searchedElement_Index = images.indexOf(url, 0);
        dispatch(handleChooseImage(searchedElement_Index));
    };

    useEffect(() => {
        if (userComments?.isTrue) {
            const fetchProduct = async (product_id: string) => {
                const response = await getProduct(product_id);
                setProduct(response);
            };
            fetchProduct(userComments.productId);
        }
    }, []);

    const openMenuDeleteComment = (id: string) => {
        setShowHandyOptions(id);
    };

    const closeInstantMenuDeleteComment = () => {
        setShowHandyOptions('');
    };

    const deleteComment = async () => {
        closeInstantMenuDeleteComment();

        const object = {
            data: {
                userId: comment.userId,
                commentId: comment._id,
                productId: (
                    userComments as {
                        isTrue: boolean;
                        productId: string;
                    }
                ).productId,
            },
        };

        await axiosPrivate.delete('user/comments/deleteComment', object);
        if (refreshAccountOpinions) dispatch(refreshAccountComments());
    };

    return (
        <InsideWrapper>
            <CommentSection onMouseLeave={() => closeInstantMenuDeleteComment()}>
                <BigScreen userComments={userComments?.isTrue ? true : false}>
                    {userComments?.isTrue && Object.keys(product).length !== 0 ? (
                        <ProductWrapper to={`/product/${userComments.productId}`}>
                            <ProductImage>
                                <img src={(product as ProductDataInterface).prevImg} alt="Show product" />
                            </ProductImage>
                            <p>{(product as ProductDataInterface).name}</p>
                        </ProductWrapper>
                    ) : (
                        <UserData comment={comment} />
                    )}
                </BigScreen>
                <ContentSection userComments={userComments?.isTrue ? true : false}>
                    <UserDataWhenSmallScreen userComments={userComments?.isTrue ? true : false}>
                        <SmallScreen>
                            {userComments?.isTrue ? (
                                <ProductWrapper to={`/product/${userComments.productId}`}>
                                    <ProductImage>
                                        <img src={(product as ProductDataInterface).prevImg} alt="Show product" />
                                    </ProductImage>
                                    <p>{(product as ProductDataInterface).name}</p>
                                </ProductWrapper>
                            ) : (
                                <UserData comment={comment} />
                            )}
                        </SmallScreen>
                        <ContentData comment={comment} />
                    </UserDataWhenSmallScreen>
                    <Opinion comment={comment} />
                    <ImagesSection>
                        {comment?.image?.added ? (
                            <>
                                {comment.image.images.map((url, index) => (
                                    <Image
                                        src={`${BASE_URL}/${url}`}
                                        key={index}
                                        alt="comment"
                                        onClick={() => findImage(url)}
                                    />
                                ))}
                            </>
                        ) : (
                            <></>
                        )}
                    </ImagesSection>
                    <CommentsScore comment={comment} userComments={userComments?.isTrue} />
                </ContentSection>
                {auth.id === comment.userId && userComments?.isTrue && (
                    <AdditionalHoverMenu onClick={() => openMenuDeleteComment(comment._id)}>
                        <HiDotsVertical />
                    </AdditionalHoverMenu>
                )}
            </CommentSection>
            {showHandyOptions === comment._id ? (
                <HandyMenu onMouseOver={() => openMenuDeleteComment(comment._id)} onClick={() => deleteComment()}>
                    <IconHandyMenu>
                        <MdOutlineDeleteSweep />
                    </IconHandyMenu>
                    <DescriptionHandyMenu>Usuń komentarz</DescriptionHandyMenu>
                </HandyMenu>
            ) : (
                <></>
            )}
        </InsideWrapper>
    );
};

export default ViewComment;
