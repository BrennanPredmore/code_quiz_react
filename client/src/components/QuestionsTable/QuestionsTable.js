import React, { Component } from 'react';
import axios from 'axios';
import Question1 from '../Pages/Quiz/Question1/Question1';
import Question2 from '../Pages/Quiz/Question2/Question2';
import Question3 from '../Pages/Quiz/Question3/Question3';
import Question4 from '../Pages/Quiz/Question4/Question4';
import Question5 from '../Pages/Quiz/Question5/Question5';
import ViewResultsBTN from '../Buttons/ViewResults/ViewResultsBTN';
import './style.css';

class QuestionsTable extends Component {
  constructor(props) {
    super(props);
    this.getQuestions();
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  //big shawn rippin
  getQuestions() {
    axios.get('/api/questions').then((res) => this.setState(res.data));
  }

  render() {
    if (this.state) {
      return (
        <div className='idontknow'>
          <div className='questionDIV'>
            {console.log(this.state)}
            <Question1 question={this.state} />
            <Question2 question={this.state} />
            <Question3 question={this.state} />
            <Question4 question={this.state} />
            <Question5 question={this.state} />
          </div>
          <ViewResultsBTN />
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default QuestionsTable;
