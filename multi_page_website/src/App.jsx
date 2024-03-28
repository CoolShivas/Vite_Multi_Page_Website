import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ServicePage from "./components/ServicePage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import AppName from "./components/AppName";



function App() {
  return <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" Component={HomePage}></Route>
      <Route path="/contact" Component={ContactPage}></Route>
      <Route path="/about" Component={AboutPage}></Route>
      <Route path="/appname" Component={AppName}></Route>
      <Route path="/servicepage/:id" Component={ServicePage}></Route>
      <Route path="*" Component={ErrorPage}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
}

export default App;