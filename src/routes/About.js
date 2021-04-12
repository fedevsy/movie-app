import React from 'react';
import './About.scss';

class About extends React.Component {
  componentDidMount() {
    document.querySelector('.nav').style.display = 'none';
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor= 'rgb(250, 235, 239, 1)';
  }
  render() {
    return (
      <>
      <div className="about-wrapper">
        <p className="about-text">무비 API를 axios로 통신하여 무비 리스트를 보여주는 활용한 리액트 웹앱입니다.</p>
      </div>
      </>
    )
  }
}

export default About;