
import React from 'react';
//import { Provider } from 'react-redux';
//import  {store}   from './Redux/Store';
import TaskForm from './Components/TodoInput';
import TaskList from './Components/TodoList';
import MainPage from "./Components/MainPage"
import DetailsPage from "./Components/DetailsPage"
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes } from "react-router-dom"
import "./App.css"

function App() { 
  return (
   
      <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/> }></Route>
        <Route path="/:id" element={<DetailsPage/>}></Route>
         
       </Routes>
       </BrowserRouter>  
      </div>
   
  );
}

export default App;
