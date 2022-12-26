import AccountMenu from 'components/molecules/AccountMenu/AccountMenu';
import { ReactNode } from 'react';
import { LeftWrapper, RightWrapper, Wrapper } from './AccountSettings.styles';

interface AccountSettingsProps {
    children: ReactNode;
}

const AccountSettings = ({ children }: AccountSettingsProps) => {
    return (
        <Wrapper>
            <LeftWrapper>
                <AccountMenu />
            </LeftWrapper>
            <RightWrapper>{children}</RightWrapper>
        </Wrapper>
    );
};

export default AccountSettings;
