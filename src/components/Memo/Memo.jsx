import React from 'react';
import "./Memo.css";
import MemoCards from './MemoCards/MemoCards';

const Memo = () => {
  return (
    <div className='container-memo'>
        <h1>Memo:</h1>
        <MemoCards/>
    </div> 
  )
}

export default Memo