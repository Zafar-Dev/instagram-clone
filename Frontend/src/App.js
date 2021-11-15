import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import Profile from "./pages/profilePage/Profile";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>          
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
