import React from 'react';
import { MdSearch, MdKeyboardBackspace } from "react-icons/md";
import './Detail.scss'

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.componentDidMount)
    const { location, history } = this.props;
    if(location.state === undefined){
      history.push("/");
    }else{
      document.querySelector('.nav').style.display = 'none';
      document.body.style.backgroundImage = `url(${location.state.poster})`;
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
      document.body.style.backgroundSize = 'cover';
    };
    
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const link = `https://www.google.com/search?q=${location.state.title}`;
      const home = '/';
      const onClickLink = () => {
        window.open(link, '_blank');
      };
      const onClickHome = () => {
        window.open(home, '_self');
      };
      
      return (
        <>
        <div className="detail-wrapper">
          <ul className="detail-list">
            <li className="detail-item">
              <img className="detail-img" src={location.state.poster} alt={location.state.title} title={location.state.title} />
            </li>
            <li className="detail-item">
              <h3 className="detail-title">{location.state.title}</h3>
              <p className="detail-summary">{location.state.summary}</p>
              <button className="detail-more" type="button" onClick={onClickLink}><MdSearch /> MORE</button>
              <button className="detail-more" type="button" onClick={onClickHome}><MdKeyboardBackspace /> BACK</button>
            </li>
          </ul>
        </div>
        </>
        )
    }else{
      return null;
    }
    
  }
}

export default Detail;