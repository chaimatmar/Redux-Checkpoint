import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/todoSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: updatedDescription }));
    setIsEditing(false);
  };

  return (
    <div style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px' }}>
      {isEditing ? (
        <input 
          value={updatedDescription} 
          onChange={(e) => setUpdatedDescription(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}

      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>

      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Task;