import { useEffect, useState } from 'react';
import {
    Wrapper,
    NormalScreenSection,
    InsideWrapper,
    SmallScreenSection,
    HamburgerMenu,
    StyledLinksSmallScreenSection,
    SmallScreenMenuPreview,
    QuantityOfProductSmallScreen,
    QuantityOfProductMediumScreen,
    MediumScreenSection,
    XmarkLink,
    XmarkIcon,
} from './NavBar.styles';
import { VscMilestone, VscInspect, VscCommentDiscussion } from 'react-icons/vsc';
import { BsEnvelope, BsFillPersonLinesFill } from 'react-icons/bs';
import useLogout from 'hooks/useLogout';
import NoRealWebsiteAlert from 'components/molecules/NoRealWebisteAlert/NoRealWebsiteAlert';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUserReceived2Line, RiCloseFill } from 'react-icons/ri';
import { VscAccount, VscVm } from 'react-icons/vsc';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BsBasket3 } from 'react-icons/bs';
import { FiPackage, FiSettings } from 'react-icons/fi';
import { BiNews, BiBuildingHouse } from 'react-icons/bi';
import StyledLink from 'components/atoms/StyledLink/StyledLink';
import WebsiteLogo from 'components/atoms/WebsiteLogo/WebsiteLogo';
import DropDownMenuSection from 'components/atoms/DropDownMenuSection/DropDownMenuSection';
import { useSelector } from 'react-redux';
import { getBasket } from 'features/basket/basketSlice';
import { selectAuth, selectCurrentToken } from 'features/auth/authSlice';

const Admin_entitlements = Number(import.meta.env.VITE_REACT_APP_ADMIN_ROLE);
const Editor_entitlements = Number(import.meta.env.VITE_REACT_APP_EDITOR_ROLE);
const MenuInitPosition = '-270px';

const NavBar = () => {
    const auth = useSelector(selectAuth);
    const token = useSelector(selectCurrentToken);
    const logout = useLogout();
    const basketItems = useSelector(getBasket);

    const [toggleMenu, setToggleMenu] = useState<string>(MenuInitPosition);

    const getQuantityOfItems = () => {
        let temp = 0;
        basketItems.map((item) => (temp += item.quantity));
        return temp;
    };

    const signOut = async () => {
        setToggleMenu(MenuInitPosition);
        await logout();
    };

    return (
        <Wrapper>
            <InsideWrapper>
                <NoRealWebsiteAlert />
                <WebsiteLogo />
                <NormalScreenSection>
                    {auth?.roles?.find((role) => Admin_entitlements === role) && (
                        <StyledLink target={'/adminSettings'} icon={<VscInspect />} description={'Administrator'} />
                    )}
                    {auth?.roles?.find((role) => Editor_entitlements === role) && (
                        <StyledLink target={'/editorSettings'} icon={<VscInspect />} description={'Edytor'} />
                    )}

                    <StyledLink target={'/allProducts'} icon={<VscInspect />} description={'Produkty'} />
                    <StyledLink target={'/articles/all/none'} icon={<BiNews />} description={'Artykuły'} />
                    <DropDownMenuSection icon={<BiBuildingHouse />} description={'O Firmie'}>
                        <StyledLink target={'/about'} icon={<VscMilestone />} description={'O Nas'} />
                        <StyledLink target={'/contact'} icon={<BsEnvelope />} description={'Kontakt'} />
                    </DropDownMenuSection>
                    <MediumScreenSection>
                        {token !== null ? (
                            <DropDownMenuSection icon={<VscAccount />} description={'Konto'}>
                                <StyledLink
                                    target={'accountSettings/Settings'}
                                    icon={<FiSettings />}
                                    description={'Ustawienia'}
                                />
                                <StyledLink
                                    target={'/accountSettings/orders'}
                                    icon={<FiPackage />}
                                    description={'Zamówienia'}
                                />
                                <StyledLink
                                    target={'/accountSettings/recipientTemplates'}
                                    icon={<BsFillPersonLinesFill />}
                                    description={'Odbiorcy'}
                                />
                                <StyledLink
                                    target={'accountSettings/opinions'}
                                    icon={<VscCommentDiscussion />}
                                    description={'Opinie'}
                                />
                                <div onClick={signOut}>
                                    <StyledLink target={''} icon={<RiLogoutCircleLine />} description={'Wyloguj się'} />
                                </div>
                            </DropDownMenuSection>
                        ) : (
                            <StyledLink
                                target={'/authorization'}
                                icon={<RiUserReceived2Line />}
                                description={'Logowanie'}
                            />
                        )}

                        {getQuantityOfItems() !== 0 && (
                            <div style={{ position: 'relative' }}>
                                <StyledLink target={'basket'} icon={<BsBasket3 />} description={'Koszyk'} />

                                <QuantityOfProductMediumScreen>{getQuantityOfItems()}</QuantityOfProductMediumScreen>
                            </div>
                        )}
                    </MediumScreenSection>
                </NormalScreenSection>
                <SmallScreenSection>
                    <SmallScreenMenuPreview>
                        {getQuantityOfItems() !== 0 && (
                            <div style={{ position: 'relative' }}>
                                <StyledLink target={'/basket'} icon={<BsBasket3 />} smallScreen={true} />
                                <QuantityOfProductSmallScreen>{getQuantityOfItems()}</QuantityOfProductSmallScreen>
                            </div>
                        )}
                        <HamburgerMenu>
                            <GiHamburgerMenu onClick={() => setToggleMenu('-5px')} />
                        </HamburgerMenu>
                    </SmallScreenMenuPreview>
                    <StyledLinksSmallScreenSection
                        MenuInitPosition={MenuInitPosition}
                        position={toggleMenu}
                        onMouseLeave={() => setToggleMenu(MenuInitPosition)}
                    >
                        <XmarkLink>
                            <XmarkIcon onClick={() => setToggleMenu(MenuInitPosition)}>
                                <RiCloseFill />
                            </XmarkIcon>
                        </XmarkLink>
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={''} icon={<VscVm />} description={'Strona Główna'} />
                        </div>
                        {auth?.roles?.find((role) => Admin_entitlements === role) && (
                            <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                <StyledLink
                                    target={'/adminSettings'}
                                    icon={<VscInspect />}
                                    description={'Administrator'}
                                />
                            </div>
                        )}
                        {auth?.roles?.find((role) => Editor_entitlements === role) && (
                            <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                <StyledLink target={'/editorSettings'} icon={<VscInspect />} description={'Edytor'} />
                            </div>
                        )}
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={'/allProducts'} icon={<VscInspect />} description={'Produkty'} />
                        </div>
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={'/articles/all/none'} icon={<BiNews />} description={'Artykuły'} />
                        </div>
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={'/about'} icon={<VscMilestone />} description={'O Nas'} />
                        </div>
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={'/contact'} icon={<BsEnvelope />} description={'Kontakt'} />
                        </div>

                        {token !== null ? (
                            <>
                                <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                    <StyledLink
                                        target={'/accountSettings/Settings'}
                                        icon={<VscAccount />}
                                        description={'Konto'}
                                    />
                                </div>
                                <div onClick={signOut}>
                                    <StyledLink target={''} icon={<RiLogoutCircleLine />} description={'Wyloguj się'} />
                                </div>
                            </>
                        ) : (
                            <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                <StyledLink
                                    target={'/authorization'}
                                    icon={<RiUserReceived2Line />}
                                    description={'Logowanie'}
                                />
                            </div>
                        )}
                    </StyledLinksSmallScreenSection>
                </SmallScreenSection>
            </InsideWrapper>
        </Wrapper>
    );
};

export default NavBar;
