import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "../src/Components/Header"

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
