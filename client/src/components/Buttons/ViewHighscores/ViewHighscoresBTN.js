import React from 'react';
import './style.css';

const ViewHighscoresBTN = () => {
  return (
    <div className='container'>
      <div className='center'>
        <button className='button'>
          <a href='/Lesson'>
            {' '}
            <h3> High Scores</h3>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ViewHighscoresBTN;
