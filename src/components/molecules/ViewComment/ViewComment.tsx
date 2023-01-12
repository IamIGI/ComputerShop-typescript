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
    ProductImage,
    ProductWrapper,
    SmallScreen,
    UserDataWhenSmallScreen,
} from './ViewComment.style';
import { CommentInterface } from 'interfaces/Comments.interfaces';
import { BASE_URL } from 'data/URL';
import { AppDispatch } from 'app/store';
import { useDispatch } from 'react-redux';
import { handleChooseImage } from 'features/comments/commentsSlice';
import { useEffect, useState } from 'react';
import { getProduct } from 'api/products';
import { ProductDataInterface } from 'interfaces/Product.interfaces';

interface ViewCommentInterface {
    comment: CommentInterface;
    images: string[];
    userComments?: { isTrue: boolean; productId: string };
}

const ViewComment = ({ comment, images, userComments }: ViewCommentInterface) => {
    const dispatch = useDispatch<AppDispatch>();

    const [product, setProduct] = useState<ProductDataInterface | {}>({});

    const findImage = (url: string) => {
        const searchedElement_Index = images.indexOf(url, 0);
        dispatch(handleChooseImage(searchedElement_Index));
    };
    useEffect(() => {
        if (userComments?.isTrue) {
            const fetchProductImage = async (product_id: string) => {
                const response = await getProduct(product_id);

                setProduct(response);
            };
            fetchProductImage(userComments.productId);
        }
    }, []);

    return (
        <CommentSection>
            <BigScreen userComments={userComments?.isTrue ? true : false}>
                {userComments?.isTrue && Object.keys(product).length !== 0 ? (
                    <ProductWrapper>
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
                            <ProductWrapper>
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
                    {comment.image.added ? (
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
        </CommentSection>
    );
};

export default ViewComment;
