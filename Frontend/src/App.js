import { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import Profile from "./pages/profilePage/Profile";
import AddPost from "./components/addPost/AddPost";
import { ModalContext } from './context/modalContext'

function App() {
  const [postToggle, setPostToggle] = useState(false)
  console.log("state : " + postToggle)
  return (
    <ModalContext.Provider value={{postToggle, setPostToggle}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        {postToggle && <AddPost/>}
      </div>
    </ModalContext.Provider>
  );
}

export default App;
