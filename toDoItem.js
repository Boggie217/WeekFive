import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, text, done, research, handleDoneClick, handleResearchClick }) => {
  const handleDone = () => {
    handleDoneClick(id);
  };

  const handleResearch = () => {
    handleResearchClick(id);
  };

  return (
    <div className={`todo-item ${done ? 'done' : ''} ${research ? 'research' : ''}`}>
      <span>{text}</span>
      <div>
        <button onClick={handleDone}>{done ? 'Undo' : 'Done'}</button>
        <button onClick={handleResearch}>{research ? 'No Research' : 'Requires Research'}</button>
      </div>
    </div>
  );
};

export default TodoItem;
