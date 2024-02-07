import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
import Dom from "./routes/react_router_dom/index"

function App() {
  return (
    <>
      <div className='mainpageTitle'>
        <h1>React 연습용</h1>
      </div>
      <nav>
        <Link to="/src/routes/react_router_dom">DOM</Link>
      </nav>


      <Routes>
        <Route path='/src/routes/react_router_dom' element={<Dom/>}/>

      </Routes>
    </>
  );
}

export default App;
