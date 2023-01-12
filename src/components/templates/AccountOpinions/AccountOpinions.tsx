import { axiosPrivate } from 'api/axios';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import ViewComment from 'components/molecules/ViewComment/ViewComment';
import { AuthContextInterface } from 'context/AuthProvider';

import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { GetAccountOpinions } from 'interfaces/Account.interfaces';
import { useEffect, useState } from 'react';
import { BiCommentX } from 'react-icons/bi';
import AccountSettings from '../AccountSettings/AccountSettings';
import { NoOpinions, NoOpinionsIcon, TitleSection, UserOpinionSection, Wrapper } from './AccountOpinions.style';

const AccountOpinions = () => {
    const { auth } = useAuth() as AuthContextInterface;
    const axiosPrivate = useAxiosPrivate();
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);
    const [userComments, setUserComments] = useState<GetAccountOpinions>({
        message: 'User comments',
        commentsData: [],
        sumOfLikes: 0,
        commentsCount: 0,
    });

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
    }, []);

    return (
        <AccountSettings>
            {waitForFetch ? (
                <LoadingAnimation loadingSize={15} />
            ) : userComments.commentsData.length === 0 ? (
                <NoOpinions>
                    <NoOpinionsIcon>
                        <BiCommentX />
                    </NoOpinionsIcon>
                    <p>Uzytkownik nie ma zadnych komentarzy</p>
                </NoOpinions>
            ) : (
                <Wrapper>
                    <TitleSection>
                        <h1>Twoje opinie ({userComments.commentsCount})</h1>
                    </TitleSection>
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
                </Wrapper>
            )}
        </AccountSettings>
    );
};

export default AccountOpinions;
