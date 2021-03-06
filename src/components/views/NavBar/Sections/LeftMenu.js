import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <SubMenu title={<span>Menu</span>}>
        <Menu.Item key="setting:1">Best</Menu.Item>
        <Menu.Item key="setting:2">New</Menu.Item>
        <Menu.Item key="setting:3">Discount</Menu.Item>
        <Menu.Item key="setting:4">Event</Menu.Item>
      </SubMenu>
      <Menu.Item key="best_menu">
        <Link to="/sub/best">Best</Link>
      </Menu.Item>
      <Menu.Item key="new_menu">
        <Link to="/sub/new">New</Link>
      </Menu.Item>
      <Menu.Item key="discount_menu">
        <Link to="/sub/discount">Discount</Link>
      </Menu.Item>
      <Menu.Item key="event_menu">
        <Link to="/sub/event">Event</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
