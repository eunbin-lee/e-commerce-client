import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/* <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item> */}
      <SubMenu title={<span>Menu</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="best_menu">
        <Link to="/sub">Best</Link>
      </Menu.Item>
      <Menu.Item key="new_menu">
        <Link to="/sub">New</Link>
      </Menu.Item>
      <Menu.Item key="sales_menu">
        <Link to="/sub">Sales</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
