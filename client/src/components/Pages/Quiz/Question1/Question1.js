import React from 'react';

const Question1 = ({ question }) => {
const answerBtnClicked = (e) => {
  console.log(e.target.innerText)
}
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{question[0].title}</h1>
      <div className='topQuestions'>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[0].choices[0]}</h5>
        </button>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[0].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[0].choices[2]}</h5>
        </button>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[0].choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question1;
