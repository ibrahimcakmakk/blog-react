import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const singUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.history.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <Topbar isAuth={isAuth} singUserOut={singUserOut} />

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />

        <Route path="/createpost" element={<Create isAuth={isAuth} />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
