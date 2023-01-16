import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import SumOfLikes from 'components/atoms/SumOfLikes/SumOfLikes';
import ViewComment from 'components/molecules/ViewComment/ViewComment';
import NewCommentNotification from 'components/organisms/NewCommentNotification/NewCommentNotification';
import { AuthContextInterface } from 'context/AuthProvider';

import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { GetAccountOpinionsInterface } from 'interfaces/Account.interfaces';
import { useEffect, useState } from 'react';
import { BiCommentX } from 'react-icons/bi';
import AccountSettings from '../AccountSettings/AccountSettings';
import {
    GeneralSection,
    NoOpinions,
    NoOpinionsIcon,
    TitleSection,
    UserOpinionSection,
    Wrapper,
} from './AccountOpinions.style';

const AccountOpinions = () => {
    const { auth } = useAuth() as AuthContextInterface;
    const axiosPrivate = useAxiosPrivate();
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);
    const [userComments, setUserComments] = useState<GetAccountOpinionsInterface>({
        message: 'User comments',
        commentsData: [],
        sumOfLikes: 0,
        commentsCount: 0,
        newComments: [],
    });
    const [refresh, setRefresh] = useState<boolean>(false);
    useEffect(() => {
        const fetchAccountComments = async (data: { userId: string; pageNr: number }) => {
            try {
                setWaitForFetch(true);
                const response = await axiosPrivate.post('user/comments', data);
                setUserComments(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log(err);
            }
        };
        const data = {
            userId: auth.id,
            pageNr: 1,
        };

        fetchAccountComments(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <AccountSettings>
            {waitForFetch ? (
                <LoadingAnimation loadingSize={15} />
            ) : (
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
                                    handleRefresh={handleRefresh}
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
            )}
        </AccountSettings>
    );
};

export default AccountOpinions;
