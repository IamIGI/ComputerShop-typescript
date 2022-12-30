import {
    Wrapper,
    CommentSection,
    ContentSection,
    NoOpinionsLeft,
    NoOpinionsLeftSection,
    IconNoOpinionsLeft,
    DescriptionNoOpinionsLeft,
    ImagesSection,
    Image,
    BigScreen,
    SmallScreen,
    UserDataWhenSmallScreen,
    LoadCommentsButton,
} from './Comments.style';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

import UserData from 'components/atoms/Comments/UserData/UserData';
import ContentData from 'components/atoms/Comments/ContentData/ContentData';
import Opinion from 'components/atoms/Comments/Opinion/Opinion';
import CommentsScore from 'components/atoms/Comments/CommentScore/CommentsScore';
import { FaCommentSlash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
    fetchComments,
    getAllCommentsData,
    getCommentsErrors,
    getCommentsFilters,
    getCommentsStatus,
    handleChooseImage,
    isRefreshComments,
} from 'features/comments/commentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, store } from 'app/store';
import { BASE_URL } from 'data/URL';
import { CommentInterface, CommentsResponseInterface } from 'interfaces/Comments.interfaces';

const Comments = () => {
    const dispatch = useDispatch<AppDispatch>();
    const comments = useSelector(getAllCommentsData);
    const commentsStatus = useSelector(getCommentsStatus);
    const commentsErrors = useSelector(getCommentsErrors);
    const commentFilters = useSelector(getCommentsFilters);
    const refreshComments = useSelector(isRefreshComments);

    useEffect(() => {
        store.dispatch(fetchComments());
    }, [commentFilters, refreshComments]);

    const { comments: commentsArray, length: displayedComments } = comments as CommentsResponseInterface;
    const [limitViewedComments, setLimitViewedComments] = useState(5);

    const findImage = (url: string) => {
        const searchedElement_Index = (comments as CommentsResponseInterface).images.indexOf(url, 0);
        dispatch(handleChooseImage(searchedElement_Index));
    };

    const handleLimitOfViewedComments = () => {
        setLimitViewedComments((prevValue) => {
            return prevValue + 5;
        });
    };

    return (
        <Wrapper>
            {commentsStatus === 'loading' ? (
                <LoadingAnimation loadingSize={15} />
            ) : commentsStatus === 'succeeded' ? (
                <>
                    {displayedComments === 0 ? (
                        <>
                            {!Boolean(comments) ? (
                                <></>
                            ) : (
                                <NoOpinionsLeftSection>
                                    <IconNoOpinionsLeft>
                                        <FaCommentSlash />
                                    </IconNoOpinionsLeft>
                                    <DescriptionNoOpinionsLeft>
                                        Brak opinii dla tego wyszukiwania
                                    </DescriptionNoOpinionsLeft>
                                </NoOpinionsLeftSection>
                            )}
                        </>
                    ) : (
                        <>
                            {(commentsArray as CommentInterface[])
                                .slice(0, limitViewedComments)
                                .map((comment, index) => (
                                    <CommentSection key={index}>
                                        <BigScreen>
                                            <UserData comment={comment} />
                                        </BigScreen>
                                        <ContentSection>
                                            <UserDataWhenSmallScreen>
                                                <SmallScreen>
                                                    <UserData comment={comment} />
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
                                            <CommentsScore comment={comment} />
                                        </ContentSection>
                                    </CommentSection>
                                ))}
                            {limitViewedComments < displayedComments ? (
                                <NoOpinionsLeft>
                                    <LoadCommentsButton onClick={() => handleLimitOfViewedComments()}>
                                        Więcej opinii (
                                        {(commentsArray as CommentInterface[]).length - limitViewedComments})
                                    </LoadCommentsButton>
                                </NoOpinionsLeft>
                            ) : (
                                <NoOpinionsLeft>
                                    <p>Koniec opinii</p>
                                </NoOpinionsLeft>
                            )}
                        </>
                    )}
                </>
            ) : (
                <p>{commentsErrors}</p>
            )}
        </Wrapper>
    );
};

export default Comments;
