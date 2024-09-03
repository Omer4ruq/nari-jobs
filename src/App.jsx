import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
