import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#03192f";
      showAlert("Dark mode has been set.", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been set.", "success");
    }
  }

  const toggleModeGrey = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been set.", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been set.", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeGrey={toggleModeGrey} aboutText="About TextUtils" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          </Routes>
          {/* <TextForm header="Enter the text to analyse" /> */}
        </div >
      </Router>
    </>
  );
}

export default App;

//if deploy on github then we need remove routing codes

