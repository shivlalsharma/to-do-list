import React from 'react';
import TodoContainer from './TodoContainer';
import TodoHeading from './TodoHeading';
import InputBox from './InputBox';
import ScrollToTop from './ScrollToTop';

export default function Todolist() {
  return (
    <div className='container'>
        <TodoHeading/>
        <InputBox/>
        <TodoContainer/>
        <ScrollToTop/>
    </div>
  )
}