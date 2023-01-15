import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { SyntheticEvent, useEffect, useState } from 'react';
import {
    Wrapper,
    SectionTitle,
    LabelArea,
    SectionChange,
    CheckboxLocal,
    BottomWrapper,
    SavedInfo,
    SavedIcon,
    SavedDescription,
} from './AccountNotifications.style';
import { Button } from 'components/atoms/Button/Button';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { AiOutlineSave } from 'react-icons/ai';
import { AuthContextInterface } from 'context/AuthProvider';
import { MdNotificationsNone } from 'react-icons/md';
import { AccountInterface } from 'interfaces/Account.interfaces';

interface AccountNotificationsProps {
    accountInfo: AccountInterface;
}

const AccountNotifications = ({ accountInfo }: AccountNotificationsProps) => {
    const axiosPrivate = useAxiosPrivate();
    const [notifications, setNotifications] = useState<{ newComment: boolean }>({
        newComment: accountInfo.notifications.newComment.allowNotification,
    });
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsSaved(false);
        }, 3000);
    }, [isSaved]);

    const handleCheck = (key: string, value: boolean) => {
        setNotifications((prevValue) => {
            return {
                ...prevValue,
                [key]: value,
            };
        });
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const object = {
            userId: accountInfo._id,
            name: 'newComment',
            value: notifications.newComment,
        };
        try {
            await axiosPrivate.put('user/notifications', object);

            setIsSaved(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Powiadomienia'} icon={<MdNotificationsNone />} />
            </SectionTitle>
            <Wrapper>
                {notifications === undefined ? (
                    <LoadingAnimation loadingSize={10} />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <SectionChange>
                            <CheckboxLocal
                                type="checkbox"
                                onChange={(e) => handleCheck('newComment', e.target.checked)}
                                checked={notifications.newComment}
                            />
                            <LabelArea>
                                Chcę otrzymywac powiadomienia o możlwości skomentowania zakupionego produktu
                            </LabelArea>
                        </SectionChange>
                        <BottomWrapper>
                            <Button type="submit">Zapisz</Button>

                            {isSaved ? (
                                <SavedInfo>
                                    <SavedIcon>
                                        <AiOutlineSave />
                                    </SavedIcon>
                                    <SavedDescription>Zapisano</SavedDescription>
                                </SavedInfo>
                            ) : (
                                <></>
                            )}
                        </BottomWrapper>
                    </form>
                )}
            </Wrapper>
        </>
    );
};

export default AccountNotifications;
