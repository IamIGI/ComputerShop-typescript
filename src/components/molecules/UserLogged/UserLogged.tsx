import useLogout from 'hooks/useLogout';
import {
    Wrapper,
    List,
    StyledLink,
    TitleSection,
    Icon,
    Title,
    UserDescription,
    NavDescription,
} from './UserLogged.style';
import { Line } from 'components/atoms/Line/Line';
import { VscAccount } from 'react-icons/vsc';
import { BsPerson } from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';
import capitalizeFirstLetter from 'helpers/capitalizeFirstLetter';
import { selectAuth } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';

const UserLogged = () => {
    const auth = useSelector(selectAuth);

    const logout = useLogout();

    const signOut = async () => {
        await logout();
    };

    return (
        <Wrapper>
            <TitleSection>
                <Icon>
                    <BsPerson />
                </Icon>
                <Title>Twoje Konto</Title>
            </TitleSection>
            <UserDescription>
                <p>witaj {capitalizeFirstLetter(auth.userName as string)}</p>
            </UserDescription>
            <Line />

            <List>
                <li>
                    <StyledLink to="accountSettings/Settings">
                        <div>
                            <span>
                                <VscAccount />
                            </span>
                        </div>
                        <NavDescription>Konto</NavDescription>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink onClick={signOut} to="">
                        <div>
                            <span>
                                <RiLogoutCircleLine />
                            </span>
                        </div>
                        <NavDescription>Wyloguj się</NavDescription>
                    </StyledLink>
                </li>
            </List>
        </Wrapper>
    );
};

export default UserLogged;
