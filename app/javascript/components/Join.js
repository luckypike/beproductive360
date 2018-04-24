import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

// import Cleave from 'cleave.js';
import Cleave from 'cleave.js/react';

import Logo from '../images/logo_vert.svg';

import {
  Link
} from 'react-router-dom';

class Join extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cleave: null,
      requested: false,
      phone: null,
      token: '',
      phoneCorrect: false
    }

    // this.phoneRef = React.createRef();
  }

  componentDidMount() {
    if(this.props.auth) {
      window.location.href = this.props.members_path;
    }
    // new Cleave(this.phoneRef.current, {
    //   numericOnly: true,
    //   prefix: '+7',
    //   delimiters: [' ', ' ', '-', '-'],
    //   blocks: [2, 3, 3, 2, 2],
    //   onValueChanged: (e) => {
    //     console.log('QQQ');

    //   }
    // });


  }


  checkPhone() {
    this.setState({
      phoneCorrect: (this.state.phone.length == 12 && this.state.phone.substring(0, 3) == '+79'),
    });
  }

  onPhoneChange = (e) => {
    this.setState({
      phone: e.target.rawValue
    }, function() {
      this.checkPhone();
    });
  }

  onTokenChange = (e) => {
    this.setState({token: e.target.value});
  }

  handleSubmit = (e) => {
    if(this.state.requested) {
      this.confirmCode(e);
    } else {
      this.requestCode(e);
    }
    e.preventDefault();
  }

  requestCode = (e) => {
    axios.post(e.target.action, {
      phone: this.state.phone,
      authenticity_token: this.props.authenticity_token
    });
    this.setState({
      requested: true
    })
  }

  confirmCode = (e) => {
    axios
      .post(e.target.action, {
        phone: this.state.phone,
        token: this.state.token,
        authenticity_token: this.props.authenticity_token
      })
      .then(response => {
        if(response.data.error) {
          console.log(response.data.error);
        } else {
          window.location.href = response.headers.location;
        }
        // console.log(response);
      });
  }

  render () {
    return (
      <div className="page page_join">
        <div className="page_join_form">
          <div className="logo">
            <Link to={this.props.root_path}>
              <img src={Logo} />
            </Link>
          </div>

          <div className="form">
            <form action={this.props.new_user_session_path} onSubmit={this.handleSubmit}>
              <div className="form_inputs">
                <p>
                  Для регистрации необходимо указать номер мобильного телефона. Он нужен только для связи в случае необходимости и не будет опубликован публично. На один номер можно зарегистрировать любое количество участников.
                </p>
                <div className="form_inputs_item">
                  <label>
                    Номер телефона
                  </label>
                  <Cleave
                    type="tel"
                    disabled={this.state.requested}
                    onChange={this.onPhoneChange}
                    options={{
                      prefix: '+7',
                      delimiters: [' ', ' ', '-', '-'],
                      blocks: [2, 3, 3, 2, 2],
                      numericOnly: true
                    }}
                  />
                </div>

                {this.state.requested &&
                  <div className="form_inputs_item">
                    <label>
                      Код подтверждения
                    </label>
                    <input type="number" name="token" value={this.state.token} onChange={this.onTokenChange} />
                  </div>
                }
              </div>

              <div className="form_actions">
                <button className="btn" disabled={!this.state.phoneCorrect}>Далее</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



export default Join;
