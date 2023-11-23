
// src/redux/actions.js
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: text,
  });
  
  export const reorderTodos = (todos) => ({
    type: 'REORDER_TODOS',
    payload: todos,
  });

  
  