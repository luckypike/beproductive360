import React from 'react';
import PropTypes from 'prop-types';

import video from '../images/bg.mp4';

import Logo from '!svg-react-loader!../images/logo_hor.svg';

import {
  Link
} from 'react-router-dom';

class Index extends React.Component {
  render () {
    return (
      <div className="page page_index">
        <div className="page_index_header_wrapper">
          <div className="page_index_header">
            <div className="logo">
              <Logo />
            </div>

            <div className="slogan">
              Решения для тех, кто хочет добиться успеха
            </div>

            <div className="place">
              Нижний Новгород, Технопарк Анкудиновка
            </div>

            <div className="join">
              <Link to={this.props.join_path}>
                Зарегистрироваться
              </Link>
            </div>
          </div>

          <video className="bgvid" playsInline autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default Index;
