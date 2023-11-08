import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from './Root';
import SharedLayout from './Pages/SharedLayout';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Github from "./Github";

import './App.css';

const App = () => {
  const [user, setUser] = useState("");
  console.log(user); //{fname:'', email:''}
  //const [cart,setcart] = useState([]);
  return (
    <BrowserRouter>
       <nav>Welcome to React Routing</nav>
       <Routes>
         <Route path="/" element={<Root></Root>}></Route>
         <Route path="/MyPages" element={<SharedLayout />}>
           <Route path="home" element={<Home></Home>}></Route>
           <Route path="about" element={<About></About>}></Route>
           <Route path="github" element={<Github></Github>}></Route>
           
         </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
