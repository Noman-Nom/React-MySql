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
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';


const App = () => {
  return (
   <div className="app">
    <BrowserRouter>
    
    <Routes>
      <Route  path='/' element={<Student/>}></Route>
      <Route  path='/create' element={<CreateStudent/>}></Route>
      <Route  path='/update/:id' element={<UpdateStudent/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App