// ListExample.js
import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { XLg,CheckLg, Pencil, Trash } from 'react-bootstrap-icons';
import {useSelector,useDispatch} from "react-redux"
import { updateTask,deleteTask,toggleTask} from '../Redux/Reducer';
import {Link} from "react-router-dom";
import "./TodoList.css"

const ListExample = () => {
    const dispatch= useDispatch()
    const items= useSelector((state)=>state.tasks)

 const [editItemId, setEditItemId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedRating, setEditedRating] = useState('');
  const [filterByRating, setFilterByRating] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending


  const handleUpdateClick = (id, name, rating) => {
    setEditItemId(id);
    setEditedName(name);
    setEditedRating(rating.toString());
  };

  const handleSaveClick = () => {
    // Add logic to save the edited data, e.g., call onUpdate
    console.log(editItemId, editedName, editedRating);
    dispatch(updateTask({id: editItemId, name: editedName, rating: parseInt(editedRating, 10) })) ;

    // Reset state after saving
    setEditItemId(null);
    setEditedName('');
    setEditedRating('');
  };

  const handleCancelClick = () => {
    // Reset state without saving
    setEditItemId(null);
    setEditedName('');
    setEditedRating('');
  };

  const deleteitem     = (id)=>{
    dispatch(deleteTask(id))
  }  

  const Toggle= (id)=>{
    dispatch(toggleTask(id))
  }

  const handleFilterChange = (event) => {
    setFilterByRating(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredAndSortedItems = items
    .filter((item) => (filterByRating === '' || item.rating.toString() === filterByRating))
    .sort((a, b) => (sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating));

  return (
    <div className='provide-margin'>
      <div>
        <Form className="mb-3 add-allign">
        <Form.Group controlId="filterRange" className='full-width-mobile provide-margin'>
          <Form.Label>Filter by Rating:</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            value={filterByRating}
            onChange={handleFilterChange}
          />
          <Form.Label>{filterByRating !== '' ? `Rating: ${filterByRating}` : 'All'}</Form.Label>
        </Form.Group>
        <Form.Group controlId="sortSelect" className="full-width-mobile provide-margin">
          <Form.Label>Sort by Rating:</Form.Label>
          <Form.Control as="select" onChange={handleSortChange} value={sortOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Form.Control>
        </Form.Group>
      </Form>
      </div>
        
    <ListGroup className='list-items-margin'>
      <h2>Tasks</h2>
      {filteredAndSortedItems.map((item) => (
        <ListGroup.Item key={item.id} className='provide-margin full-width-item'>
          {editItemId === item.id ? (
            <Form>
              <Form.Group controlId="editName">
                <Form.Control
                  type="text"
                  placeholder="Enter updated name"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="editRating">
                <Form.Control
                  type="number"
                  placeholder="Enter updated rating"
                  value={editedRating}
                  onChange={(e) => setEditedRating(e.target.value)}
                />
              </Form.Group>
              <Button variant="success" onClick={handleSaveClick}>
                Save
              </Button>
              <Button variant="secondary" className="ml-2" onClick={handleCancelClick}>
                Cancel
              </Button>
            </Form>
          ) : (
            <>
            <div >
               <h5 className={item.done ? 'text-muted' : ''}>{item.name}</h5>
              <p>
                Rating: {item.rating} | Status: {item.done ? 'Done' : 'Undone'}
              </p>
              <Button
                variant={item.done ? 'warning' : 'success'}
                className="mr-2 provide-margin "
                onClick={() => Toggle(item.id)
                }
              >
                {item.done ? <XLg  /> : <CheckLg  />} {item.done ? 'Mark Undone' : 'Mark Done'}
              </Button>
              <Button variant="warning" onClick={() => handleUpdateClick(item.id, item.name, item.rating)}>
                <Pencil /> 
              </Button>
              <Button variant="danger" className="ml-2 provide-margin" onClick={() => deleteitem(item.id)}>
                <Trash /> 
              </Button>
              <Link to={`/${item.id}`}><Button variant="info" className='provide-margin'>View Details</Button></Link>
              
              
           

              
           

              </div>
             
            </>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
    </div>
  );
};

export default ListExample;
