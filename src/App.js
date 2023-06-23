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
import './App.css';
import Landing from './pages/Home/Landing';

function App() {
  const { user, authIsReady } = useAuthContext();
  const [ showModal, setShowModal ] = useState(true)

  window.onload = () => {
    setTimeout(() => setShowModal(false), 3500)
  }

  return (
    <div className="App">
      <Landing showModal={showModal} setShowModal={setShowModal}/>
      <BrowserRouter>
        {user && authIsReady && <DevNavbar/>}
        <Routes>
          <Route path="/" element={!showModal && <Home/>} />
          <Route path="/contact" element={<Contact/>} />        
          <Route path="/about" element={<About/>} />
          <Route path="/projects/:id" element={<Projects/>} />

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
