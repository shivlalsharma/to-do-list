import React, { useContext } from 'react';
import { Context } from '../MainComponent/ThemeProvider';

export default function TodoTime(props) {
  const {timeSince} = useContext(Context);
  
  return (
    <div className='todo-time'>{timeSince(props.timestamp)}</div>
  )
}
