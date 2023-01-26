import AccountPreviewSection from 'components/organisms/AccountPreviewSection/AccountPreviewSection';
import NavBar from 'components/organisms/NavBar/NavBar';

import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { InsideWrapper, Wrapper } from './MainTemplate.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import ChangeHotShootTimer from 'data/ChangeHotShootTimer';
import { Toaster } from 'react-hot-toast';

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
    ChangeHotShootTimer();
    return (
        <>
            <GlobalStyle />
            <Toaster position="bottom-left" />
            <Wrapper>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        {/* <ChangeHotShootTimer /> */}
                        <NavBar />
                        <InsideWrapper>
                            {children}
                            <AccountPreviewSection />
                        </InsideWrapper>
                        <Footer />
                    </ThemeProvider>
                </BrowserRouter>
            </Wrapper>
        </>
    );
};

export default MainTemplate;
