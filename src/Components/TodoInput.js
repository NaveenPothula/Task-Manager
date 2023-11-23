// TaskForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./TodoInput.css"
import { addTask } from '../Redux/Reducer';
import {useDispatch   } from "react-redux"
const TaskForm = () => {
    const dispatch= useDispatch()
    
  const [taskName, setTaskName] = useState('');
  const [rating, setRating] = useState('');
  //const [id,setId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && rating) {
      const id = Math.random().toString()
      dispatch(addTask({ id,  name:taskName, rating }));
      setTaskName('');
      setRating('');
      //setId('')
    }
  };

  return (
    <div className='provide-margin'>
    <h2 className= "heading-tag"> Task Details Form</h2>
    <Form onSubmit={handleSubmit} className='allign' >
      
      
      <Form.Group controlId="taskName" className="full-mobile-width add-margin">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
    </Form.Group>

      <Form.Group controlId="rating"  className='full-mobile-width add-margin'>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="5"
          placeholder="Enter rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
         
        />
      </Form.Group>

      <Button variant="primary" type="submit" className='button-class'>
        Add Task
      </Button>
    </Form>
    </div>
  );
};

export default TaskForm;
