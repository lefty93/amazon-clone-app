import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import { useStateValue } from "./Context/StateProvider";
import { auth } from './firebase'
import { useEffect } from "react";


function App() {
  const [{ user }, dispatch] = useStateValue();

  // Piece of code which runs based on a given condition.
  // useEffect

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
      return () => {
        // any cleanup progress goes here
        unsubscribe()
      }
    })
  }, [])
  console.log(user)
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
