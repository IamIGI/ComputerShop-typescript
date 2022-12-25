import AccountDangerSection from 'components/molecules/AccountDangerSection/AccountDangerSection';
import AccountData from 'components/molecules/AccountData/AccountData';
import AccountEntitlements from 'components/molecules/AccountEntitlements/AccountEntitlements';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import useAuth from 'hooks/useAuth';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { useEffect, useState } from 'react';
import { Wrapper } from './AccountSettingsSettings.style';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { AuthContextInterface } from 'context/AuthProvider';
import { AccountInterface } from 'interfaces/Account.interfaces';

const AccountSettingsSettings = () => {
    const { auth } = useAuth() as AuthContextInterface;
    const axiosPrivate = useAxiosPrivate();
    const [accountInfo, setAccountInfo] = useState<AccountInterface | {}>({});
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);
    const [refresh, setRefresh] = useState<boolean>(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        const getAccountInfo = async (data: { userId: string }) => {
            try {
                setWaitForFetch(true);
                const response = await axiosPrivate.post('user/accountInfo', data);
                setAccountInfo(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log(err);
            }
        };
        const data = {
            userId: auth.id,
        };

        getAccountInfo(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    return (
        <AccountSettings>
            <Wrapper>
                {waitForFetch ? (
                    <LoadingAnimation loadingSize={15} />
                ) : (
                    <>
                        <AccountData accountInfo={accountInfo as AccountInterface} handleRefresh={handleRefresh} />
                        <AccountEntitlements accountEntitlements={(accountInfo as AccountInterface).Enlistments} />
                        <AccountDangerSection />
                    </>
                )}
            </Wrapper>
        </AccountSettings>
    );
};
export default AccountSettingsSettings;
