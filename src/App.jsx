import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


// import 'bootstrap/dist/css/bootstrap.main.css'
import Student from './Student';


const App = () => {
  return (
   <div className="app">
    <BrowserRouter>
    
    <Routes>
      <Route  path='/' element={<Student/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App