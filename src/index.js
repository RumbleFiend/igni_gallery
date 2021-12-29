import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Gallery from './routes/gallery';
import Navbar from './components/navbar';
import Register from "./routes/register";
import Contact from "./routes/contact";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
