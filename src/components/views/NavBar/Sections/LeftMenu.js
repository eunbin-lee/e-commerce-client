import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/* <SubMenu title={<span>Menu</span>}>
        <Menu.Item key="setting:1">
          <Link to="/sub/best">All</Link>
        </Menu.Item>
        <Menu.Item key="setting:1">
          <Link to="/sub/best">Best</Link>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <Link to="/sub/new">New</Link>
        </Menu.Item>
        <Menu.Item key="setting:3">
          <Link to="/sub/discount">Discount</Link>
        </Menu.Item>
      </SubMenu> */}

      <Menu.Item key="best_menu">
        <Link to="/sub/best">Best</Link>
      </Menu.Item>
      <Menu.Item key="new_menu">
        <Link to="/sub/new">New</Link>
      </Menu.Item>
      <Menu.Item key="discount_menu">
        <Link to="/sub/discount">Discount</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
