import FixedBottomContact from "@/components/common/fixedBottomContact/fixedBottomContact";
import Fixedcontactbutton from "@/components/common/fixedcontactbutton/fixedcontactbutton";
import Fixedmailbutton from "@/components/common/fixedMailButton/fixedmailbutton";
import CursorAnimation from "@/components/cursore/CursorAnimation";
import { AuthContextProvider } from "@/context/authContext";
import "@/styles/globals.css";
import "@/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-sine', 
      once: false, 
    });    
  }, []);
  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <CursorAnimation />
        <Component {...pageProps} />
        <Fixedcontactbutton />
        {/* <FixedBottomContact/> */}
        {/* <Fixedmailbutton/> */}
      </AuthContextProvider>
    </>
  );
}
