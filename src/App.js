import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useState } from 'react';
// dev
import DevNavbar from './components/Dev/DevNavbar';
import Login from './pages/Login/Login';

// pages
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Landing from './pages/Home/Landing';
import Appbar from './components/UI/Appbar';

function App() {
  const { user, authIsReady } = useAuthContext();
  const [ showModal, setShowModal ] = useState(true)

  window.onload = () => {
    setTimeout(() => setShowModal(false), 3500)
  }

  return (
    <div>
      <BrowserRouter>
      <Landing showModal={showModal} setShowModal={setShowModal}/>

        <Appbar/>

        {user && authIsReady && <DevNavbar/>}
        <Routes>
          <Route path="/" element={!showModal && <Home/>} />
          {/* <Route path="/contact" element={<Contact/>} />        
          <Route path="/about" element={<About/>} />
          <Route path="/projects/:id" element={<Projects/>} /> */}

          {/* dev */}
          <Route path="/dev/login" element={
            !user ? <Login/> : <Navigate to="/"/> 
          }/>

          <Route path="/dev/upload" element={ 
            !user ? <Login/> : <Navigate to="/"/> 
          }/>

          <Route path="/dev/edit" element={
            !user ? <Login/> : <Navigate to="/"/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
