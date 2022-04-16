import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPages/Login/Login";
import SignUp from "./Pages/LoginPages/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import RequiredAuth from "./Pages/RequiredAuth/RequiredAuth";
import Services from "./Pages/ServicesPage/Services/Services";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/services"
          element={
            <RequiredAuth>
              <Services></Services>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
