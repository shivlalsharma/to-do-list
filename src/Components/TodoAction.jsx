import React, { useContext } from 'react';
import { Context } from '../MainComponent/ThemeProvider';
import { FaRegEdit } from  'react-icons/fa';
import { RiDeleteBin5Line } from  'react-icons/ri';

export default function TodoAction({index}) {
  const {deleteTodo,editTodo} = useContext(Context);

  return (
    <div className='todo-actions'>
        <FaRegEdit style={{marginInline: '10px'}} onClick={()=>{editTodo(index)}} className='todo-action' /> 
        <RiDeleteBin5Line onClick={()=>{deleteTodo(index)}} className='todo-action' />
    </div>
  )
}
