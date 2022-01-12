import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Clients from "./pages/clients";
import Addclient from "./pages/clients/addClient";
import Editclient from "./pages/clients/editClient";
import Home from "./pages/home";
import { Nav } from "./components/nav/nav";
export default function Routerr() {
  return (
    <Router>
      <Nav />
      {/* <div style={{height:'calc(100vh - 56px)'}} className='container d-flex align-items-center justify-content-center '> */}

      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addClient" element={<Addclient />} />
        <Route exact path="/editClient/:id" element={<Editclient />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}
