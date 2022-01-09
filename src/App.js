import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import{
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert('dark mode will be enabled', 'success');
      document.title = "TextUtils- Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'White';
      showAlert('Light mode will be enabled', 'success');
      document.title = "TextUtils- Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/about" element = {<About />}/>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode ={mode}/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
