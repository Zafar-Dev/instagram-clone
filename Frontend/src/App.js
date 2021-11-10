import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
    </div>
  );
}

export default App;
