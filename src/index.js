import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from 'react-dom/client';
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
);


