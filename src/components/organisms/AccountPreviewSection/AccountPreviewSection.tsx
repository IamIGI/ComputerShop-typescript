import LoginArea from 'components/molecules/LoginArea/LoginArea';
import RegisterArea from 'components/molecules/RegisterArea/RegisterArea';
import UserLogged from 'components/molecules/UserLogged/UserLogged';

import CartHint from 'components/organisms/CartHint/CartHint';
import { Line } from 'components/atoms/Line/Line';
import { Separator, Wrapper, InsideWrapper } from './AccountPreviewSection.style';

import { useSelector } from 'react-redux';
import { selectCurrentToken } from 'features/auth/authSlice';

const AccountPreviewSection = () => {
    const token = useSelector(selectCurrentToken);

    return (
        <>
            <Wrapper>
                {token !== null ? (
                    <UserLogged />
                ) : (
                    <InsideWrapper>
                        <LoginArea mobileView={false} />
                        <Separator />
                        <RegisterArea />
                    </InsideWrapper>
                )}
                <Line />
                <CartHint />
            </Wrapper>
        </>
    );
};

export default AccountPreviewSection;
