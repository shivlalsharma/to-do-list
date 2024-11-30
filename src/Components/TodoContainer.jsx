import React, { useContext } from 'react';
import { Context } from '../MainComponent/ThemeProvider';
import TodoText from './TodoText';
import TodoAction from './TodoAction';
import TodoTime from './TodoTime';

export default function TodoContainer() {
    const {todos} = useContext(Context);

  return (
    <>
        {todos.map((todo,index)=>(
            <div className='todo-container' key={index}>
                <div className='todolist'>
                    <TodoText todoText={todo.value} />
                    <TodoAction index={index} />
                </div>
                <TodoTime timestamp={todo.timestamp} />
            </div>
        ))}
    </>
  )
}
