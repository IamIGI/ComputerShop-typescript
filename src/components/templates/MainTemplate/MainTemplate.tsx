import AccountPreviewSection from 'components/organisms/AccountPreviewSection/AccountPreviewSection';
import NavBar from 'components/organisms/NavBar/NavBar';

import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'context/AuthProvider';
import { InsideWrapper, Wrapper } from './MainTemplate.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import ChangeHotShootTimer from 'data/ChangeHotShootTimer';
import { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux';
import { store } from 'app/store';

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
                        <Provider store={store}>
                            {/* <ChangeHotShootTimer /> */}
                            <AuthProvider>
                                <NavBar />
                                <InsideWrapper>
                                    {children}
                                    <AccountPreviewSection />
                                </InsideWrapper>
                                <Footer />
                            </AuthProvider>
                        </Provider>
                    </ThemeProvider>
                </BrowserRouter>
            </Wrapper>
        </>
    );
};

export default MainTemplate;
