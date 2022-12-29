import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import Root from 'views/Root';

function App() {
    return (
        <Provider store={store}>
            <MainTemplate>
                <Root />
            </MainTemplate>
        </Provider>
    );
}

export default App;
