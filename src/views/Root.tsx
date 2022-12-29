import About from 'components/templates/About/About';
import AllProducts from 'components/templates/AllProducts/AllProducts';
import Home from 'components/templates/Home/Home';
import MissingPage from 'components/templates/MissingPage/MissingPage';
import Unauthorized from 'components/templates/Unauthorized/Unauthorized';
import AdminSettings from 'components/templates/AdminSettings/AdminSettings';
import EditorSettings from 'components/templates/EditorSettings/EditorSettings';
import Product from 'components/templates/Product/Product';
import AccountSettingsSettings from 'components/organisms/AccountSettingsSettings/AccountSettingsSettings';
import AccountSettingsOrders from 'components/organisms/AccountSettingsOrders/AccountSettingsOrders';

import { Wrapper } from './Root.styles';

import { Routes, Route } from 'react-router-dom';
import RequireAuth from 'components/molecules/RequireAuth/RequireAuth';
import PersistLogin from 'providers/PersistLogin';

import AccountOrderHistoryItem from 'components/organisms/AccountOrderHistoryItem/AccountOrderHistoryItem';
import ContactAuthor from 'components/templates/ContactAuthor/ContactAuthor';
import Authorization from 'components/templates/Mobile/Authorization/Authorization';
import NoRealWebsitePage from 'components/templates/NoRealWebsite/NoRealWebsitePage';
import Articles from 'components/templates/Articles/Articles';
import Article from 'components/templates/Article/Article';
import AccountRecipientTemplate from 'components/organisms/AccountRecipientTemplate/AccountRecipientTemplate';
import BasketContextWrapper from 'components/templates/Basket/BasketContextWrapper';
import Register from 'components/templates/Mobile/Register/Register';

const ROLES = {
    User: Number(import.meta.env.REACT_APP_USER_ROLE),
    Editor: Number(import.meta.env.REACT_APP_EDITOR_ROLE),
    Admin: Number(import.meta.env.REACT_APP_ADMIN_ROLE),
};

const Root = () => {
    return (
        <Wrapper>
            <Routes>
                {/* public routes */}
                <Route element={<PersistLogin />}>
                    <Route path="" element={<Home />} />
                    <Route path="allProducts" element={<AllProducts />} />
                    <Route path="about" element={<About />} />
                    <Route path="articles">
                        <Route index path="all/:type" element={<Articles />} />
                        <Route path=":id" element={<Article />} />
                    </Route>
                    <Route path="product/:id" element={<Product />} />
                    <Route path="basket" element={<BasketContextWrapper />} />
                    <Route path="contact" element={<ContactAuthor />} />
                    <Route path="authorization">
                        <Route index path="" element={<Authorization />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="noRealWebsite" element={<NoRealWebsitePage />} />

                    <Route path="*" element={<MissingPage />} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                    {/* protected routes */}

                    <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin, ROLES.Editor]} />}>
                        <Route path="accountSettings">
                            <Route index path="settings" element={<AccountSettingsSettings />} />
                            <Route path="orders" element={<AccountSettingsOrders />} />
                            <Route path="orders/history/:orderId" element={<AccountOrderHistoryItem />} />
                            <Route path="recipientTemplates" element={<AccountRecipientTemplate />} />
                        </Route>
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        <Route path="adminSettings" element={<AdminSettings />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}>
                        <Route path="editorSettings" element={<EditorSettings />} />
                    </Route>
                </Route>
            </Routes>
        </Wrapper>
    );
};
export default Root;
