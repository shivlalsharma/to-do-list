import React, { useContext } from 'react';
import { Context } from '../MainComponent/ThemeProvider';
import { FaArrowUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const {isScrollVisible,scrollToTop} = useContext(Context);

  return (
    <>
        {isScrollVisible && <button className='scroll-to-top' onClick={scrollToTop}><FaArrowUp /></button>}
    </>
  )
}
