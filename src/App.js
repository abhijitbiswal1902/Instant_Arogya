// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword"
import Ambulance from "./components/Ambulance";
import Doctor from "./components/Doctor";
import Lab from "./components/Lab";
import BabyCarePage from "./components/BabyCarePage";
import ApolloProductsPage from "./components/ApolloProductsPage";



function App() {
  return (
    <Router>
      <div className="App">
        <main className="p-4">

          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/lab-tests" element={<Lab />} />
            <Route path="/babycare" element={<BabyCarePage />} />
            <Route path="/arogyaproducts" element={<ApolloProductsPage />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
