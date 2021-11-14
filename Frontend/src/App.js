import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
