import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import MailPage from "./pages/mail";
import InboxPage from "./pages/inbox"; 
import SentPage from "./pages/sent";
import TrashPage from "./pages/trash";

import "./styles/ui-styles.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="about-us" element={<AboutPage></AboutPage>}></Route>
        <Route path="mail" element={<MailPage></MailPage>}>
          <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
          <Route path="sent" element={<SentPage></SentPage>}></Route>
          <Route path="trash" element={<TrashPage></TrashPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
