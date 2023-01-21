import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NotificationProvider } from './components/Widgets/DiceWidget/Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Provider store={store}>
            <NotificationProvider>
                <App />
            </NotificationProvider>
        </Provider>
    </HashRouter>
);
