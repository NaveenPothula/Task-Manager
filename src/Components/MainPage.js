

import React from 'react';
//import { Provider } from 'react-redux';
//import  {store}   from './Redux/Store';
import TaskForm from './TodoInput';
import TaskList from './TodoList';
import "./MainPage.css"

function MainPage() { 
  return (
   
      <div className='container'>
       <TaskForm/>
       <TaskList/>
      </div>
   
  );
}

export default MainPage;
