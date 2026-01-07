import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    filter: 'all' 
  },
  reducers: {
    // إضافة مهمة جديدة
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // تبديل حالة المهمة (Done/Not Done)
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    // تعديل وصف المهمة
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) task.description = description;
    },
    // تغيير نوع الفلتر
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;