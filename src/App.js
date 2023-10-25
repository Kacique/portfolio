import "./App.css";
import "./mediaqueries.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Desktop/Home";
import ContactForm from "./components/Contact/ContactForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/contact" Component={ContactForm} />
      </Routes>
    </Router>
  );
}

export default App;
