import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import MailPage from "./pages/mail";
import InboxPage from "./pages/inbox"; 
import SentPage from "./pages/sent";
import TrashPage from "./pages/trash";
import RegisterPage from "./pages/resiger";
import UserPage from "./pages/users";
import AccountCreatePage from "./pages/account-create";
import UpdateUser from "./pages/update-user";
import SettingsPage from "./pages/settings";
import ParentPage from "./pages/parent";

import configureStore from "./redux/store/redux-store";

import "./styles/ui-styles.css";

const reduxStore = configureStore();

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage></HomePage>}></Route>
          <Route path="contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="about-us" element={<AboutPage></AboutPage>}></Route>
          <Route path="mail" element={<MailPage></MailPage>}>
            <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
            <Route path="sent" element={<SentPage></SentPage>}></Route>
            <Route path="trash" element={<TrashPage></TrashPage>}></Route>
            <Route path="account" element={<AccountCreatePage></AccountCreatePage>}></Route>
            <Route path="update" element={<UpdateUser></UpdateUser>}></Route>
          </Route>
          <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="users" element={<UserPage></UserPage>}></Route>
          <Route path="settings" element={<SettingsPage></SettingsPage>}></Route>
          <Route path="parent" element={<ParentPage></ParentPage>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
