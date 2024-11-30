import React, { useContext } from 'react';
import { Context } from '../MainComponent/ThemeProvider';
import { FaRegEdit } from  'react-icons/fa';
import { IoAddCircleOutline } from  'react-icons/io5';

export default function InputBox() {
  const {inputRef,editIndex,addTodo,handleSubmit} = useContext(Context);

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button style={{backgroundColor: editIndex === null ? '#7c00ff': '#00f'}} onClick={addTodo}>
        {editIndex !== null ? (
          <FaRegEdit style={{fontSize:'1.3rem',margin:'3px 10px'}} />
          ) : (
          <IoAddCircleOutline style={{fontSize:'1.5rem',margin:'1.5px 8.3px'}} />
        )}
      </button>
    </form>
  )
}
