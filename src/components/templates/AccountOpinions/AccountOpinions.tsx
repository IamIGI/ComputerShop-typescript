import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import SumOfLikes from 'components/atoms/SumOfLikes/SumOfLikes';
import ViewComment from 'components/molecules/ViewComment/ViewComment';
import NewCommentNotification from 'components/organisms/NewCommentNotification/NewCommentNotification';
import { selectAuth } from 'features/auth/authSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AccountSettings from '../AccountSettings/AccountSettings';
import { GeneralSection, TitleSection, UserOpinionSection, Wrapper } from './AccountOpinions.style';
import { store } from 'app/store';
import {
    accountOpinionsRefresh,
    fetchAccountOpinions,
    getUserComments,
    getUserCommentsStatus,
} from 'features/account/accountSlice';

const AccountOpinions = () => {
    const auth = useSelector(selectAuth);
    const userComments = useSelector(getUserComments);
    const status = useSelector(getUserCommentsStatus);
    const refresh = useSelector(accountOpinionsRefresh);

    const dataObject = {
        userId: auth.id as string,
        pageNr: 1,
    };

    useEffect(() => {
        store.dispatch(fetchAccountOpinions(dataObject));
    }, [refresh]);

    return (
        <AccountSettings>
            {status === 'loading' ? (
                <LoadingAnimation loadingSize={15} />
            ) : (
                status === 'succeeded' && (
                    <Wrapper>
                        <TitleSection>
                            <h1>Wystaw opinie ({userComments.newComments.length})</h1>{' '}
                        </TitleSection>
                        {userComments.newComments.length === 0 ? (
                            <p>Jesteś na bieżąco, dziękujemy za twój wkład</p>
                        ) : (
                            <GeneralSection>
                                {userComments.newComments.length !== 0 ? (
                                    <NewCommentNotification
                                        newCommentProducts={userComments.newComments}
                                        refreshAccountOpinions={true}
                                    />
                                ) : (
                                    <p>Jesteś na bieżąco, dziękujemy za twój wkład</p>
                                )}
                            </GeneralSection>
                        )}
                        <TitleSection>
                            <h1>Twoje opinie ({userComments.commentsCount})</h1>
                        </TitleSection>
                        {userComments.commentsData.length === 0 ? (
                            <p>Uzytkownik nie ma zadnych komentarzy</p>
                        ) : (
                            <GeneralSection>
                                <SumOfLikes number={userComments.sumOfLikes} />
                                <UserOpinionSection>
                                    {userComments.commentsData.slice(0, 5).map((comment, index) => (
                                        <ViewComment
                                            refreshAccountOpinions={true}
                                            key={index}
                                            comment={comment.comment[0]}
                                            images={comment.comment[0].image?.images}
                                            userComments={{ isTrue: true, productId: comment.productId }}
                                        />
                                    ))}
                                </UserOpinionSection>
                            </GeneralSection>
                        )}
                    </Wrapper>
                )
            )}
        </AccountSettings>
    );
};

export default AccountOpinions;
