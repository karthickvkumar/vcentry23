import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

import "./styles/ui-styles.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="about-us" element={<AboutPage></AboutPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
