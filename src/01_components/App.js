import React, { Component } from 'react';
import faker from "faker";
import './App.css';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const comments = [
    {
        img: faker.image.avatar(),
        name: 'Matt',
        text: 'How artistic!',
        date: 'Today at 5:42PM',
    },
    {
        img: faker.image.avatar(),
        name: 'Peter',
        text: 'Awesome!',
        date: 'Today at 8:42PM',
    },
    {
        img: faker.image.avatar(),
        name: 'Sandra',
        text: 'It\'s beautiful!',
        date: 'Today at 9:42PM',
    }
];

class App extends Component {

  render() {
    const commentCnt = comments.map(({img, name, text, date}, i) => {
        if (i > 0) {
            return <CommentDetail key={ `${ name }-1` } img={ img } name={ name } text={ text } date={ date }/>
        } else {
            return <ApprovalCard key={ `${ name }-2` }>
                <CommentDetail key={ `${ name }-1` } img={ img } name={ name } text={ text } date={ date }/>
            </ApprovalCard>
        }
    });
    return (
      <div className='app ui container comments'>
          <h3 className="ui dividing header">Comments</h3>
          {commentCnt}
      </div>
    );
  }
}

export default App;
