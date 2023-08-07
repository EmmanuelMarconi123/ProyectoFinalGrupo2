import "./App.css";
import { routes } from "./assets/routes";
import Footer from "./component/common/footer/Footer";
import Navbar from "./component/common/navbar/Navbar";
import Home from "./component/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
