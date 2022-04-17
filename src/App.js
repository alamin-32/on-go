import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPages/Login/Login";
import SignUp from "./Pages/LoginPages/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import RequiredAuth from "./Pages/RequiredAuth/RequiredAuth";
import Reviews from "./Pages/Reviews/Reviews/Reviews";
import Services from "./Pages/ServicesPage/Services/Services";

function App() {
  return (
    <div className="page-container">
      <div className="contend-wrap">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          {/* <Route path="/services" element={<Services></Services>}></Route> */}

          <Route
            path="/services"
            element={
              <RequiredAuth>
                <Services></Services>
              </RequiredAuth>
            }
          ></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
