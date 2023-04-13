import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./ui/Header/organoids/Header";
import { Footer } from "./ui/Footer/organoids/Footer";
import { Main } from "./pages/Main/organoids/Main";
import { Registration } from "./pages/Registration/organoids/Registration";
import { Login } from "./pages/Login/organoids/Login";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [show, setShow] = useState(false);
  const [showLK, setShowLK] = useState(false);

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const topicsRef = useRef(null);
  const contactsRef = useRef(null);
  const requestRef = useRef(null);

  const changePosition = (ref: any) => {
    if (ref) ref.current.scrollIntoView();
  };

  window.onscroll = () => { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("App__Button")!.style.display = "block";
    } else {
      document.getElementById("App__Button")!.style.display = "none";
    }
   };
   
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App">
      <Header changePosition={changePosition} 
        aboutRef={aboutRef} 
        servicesRef={servicesRef} 
        topicsRef={topicsRef} 
        contactsRef={contactsRef} 
        requestRef={requestRef} 
        setShowLK={setShowLK} 
        showLK={showLK} />
      <div className="App__Actual">
        <Routes>
          <Route
            path={"/"}
            element = { <Main setShow={setShow} 
                        show={show} 
                        setShowLK={setShowLK}
                        showLK={showLK}
                        aboutRef={aboutRef} 
                        servicesRef={servicesRef} 
                        topicsRef={topicsRef} 
                        contactsRef={contactsRef} 
                        requestRef={requestRef} />
                      }
          />
          <Route 
            path={"/Registration"} 
            element={<Registration />} />
          <Route 
            path={"/Login"} 
            element={<Login />} />
        </Routes>
      </div>
      <button onClick={topFunction} id="App__Button" className="App__Button" title="Вверх страницы">Верх</button>
      <Footer contactsRef={contactsRef} />
      <ToastContainer />
    </div>
  );
}

export default App;
