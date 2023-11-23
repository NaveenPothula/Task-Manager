
// DetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import {useState,useEffect} from "react"
import "./Detailspage.css"

const DetailsPage = () => {
  const { id } = useParams();

  const tasks= useSelector(state => state.tasks);
  console.log(tasks)
  const task= tasks.find(task=>task.id==id)
 
   



  return (
    <div className="details-container">
      <h1>Task Details</h1>
      {task ? (
        <div className="task-details">
          <p>Task Name: {task.name}</p>
          <p>Rating: {task.rating}</p>
          <p>Status: {task.done ? 'Done' : 'Undone'}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DetailsPage;
