import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useState, useEffect } from 'react';
// dev
import DevNavbar from './components/Dev/DevNavbar';
import Login from './pages/Login/Login';

// pages
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home';
import Landing from './pages/Home/Landing';

function App() {
  const { user, authIsReady } = useAuthContext();
  const [ showModal, setShowModal ] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowModal(false), 3000)
  }, [])


  return (
    <div>
      <BrowserRouter>
      <Landing showModal={showModal} setShowModal={setShowModal}/>
        {user && authIsReady && <DevNavbar/>}
        <Routes>
          <Route path="/" element={!showModal && <Home/>} />
          <Route path="/about" element={!showModal && <About/>} />
          <Route path="/contact" element={!showModal && <Contact/>} />  

          {/* dev */}
          <Route path="/dev/login" element={ !user ? <Login/> : <Navigate to="/"/> }/>
          <Route path="/dev/upload" element={ !user ? <Login/> : <Navigate to="/"/> }/>
          <Route path="/dev/edit" element={ !user ? <Login/> : <Navigate to="/"/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
