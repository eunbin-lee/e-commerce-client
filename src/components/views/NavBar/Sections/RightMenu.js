/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push('/login');
      } else {
        alert('Log Out Failed');
      }
    });
  };

  // if (user.userData && !user.userData.isAuth) {
  //   return (
  //     <Menu mode={props.mode}>
  //       <Menu.Item key="search">
  //         <Icon type="search" style={{ fontSize: 22, marginBottom: '20px' }} />
  //       </Menu.Item>
  //       <Menu.Item key="mail">
  //         <Link to="/login">Signin</Link>
  //       </Menu.Item>
  //       <Menu.Item key="app">
  //         <Link to="/register">Signup</Link>
  //       </Menu.Item>
  //     </Menu>
  //   );
  // } else {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="search">
        <Icon type="search" style={{ fontSize: 22, marginBottom: '20px' }} />
      </Menu.Item>

      <Menu.Item key="history">
        <Link to="/history">History</Link>
      </Menu.Item>

      {user.role === 0 ? (
        <Menu.Item key="cart">
          <Link to="/user/cart">
            <Badge
              // count={user.userData && user.userData.cart.length}
              style={{ color: '#108ee9' }}
            >
              Cart
            </Badge>
          </Link>
        </Menu.Item>
      ) : (
        <Menu.Item key="admin">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
      )}

      <Menu.Item key="logout">
        <Link onClick={logoutHandler}>Logout</Link>
      </Menu.Item>
    </Menu>
  );
}
// }

export default withRouter(RightMenu);
