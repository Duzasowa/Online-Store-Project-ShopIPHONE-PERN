import React from "react";
import { useState, useContext } from "react";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { login, registration } from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/auth.css';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
          data = await login(email, password);
      } else {
          data = await registration(email, password);
      }
      user.setUser(user)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
    window.location.reload();
  }

  return (
    <div class="auth_intro">
      <div class="auth_container">
        <div class="auth_card-top">
          <div class="auth_card-top-text">{ isLogin ? 'Login' : 'Create a user account'}</div>
        </div>
        <div class="auth_card">
          <div class="auth_card-text">{ isLogin ? 'ShopIPHONE me ID' : 'Registration'}</div>
          <Form className="d-flex flex-column">
            <Form.Control 
              className="mt-3"
              placeholder="Enter your email..."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Control 
              className="mt-3"
              placeholder="Enter your password..."
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
              {isLogin ?
                <div>
                  Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
                </div>
                :
                <div>
                  Have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                </div>
              }
              <div class="auth_login-registration-buttom"
                onClick={() => click()}
                
              >
                {isLogin ? 'Login' : 'Registration'}
              </div>
            </Row>
            
          </Form>
        </div>
        <div class="auth_card-bottom">
          <div class="auth_card-top-bottom">Informacja prawna</div>
        </div>
      </div>
    </div>
  
  );
});

export default Auth;
