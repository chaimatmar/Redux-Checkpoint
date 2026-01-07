import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description) {
      dispatch(addTask({
        id: Math.random(),
        description,
        isDone: false
      }));
      setDescription('');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <input 
        type="text" 
        placeholder="Enter task..." 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;