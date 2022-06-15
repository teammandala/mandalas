import React from 'react'
import {Layout, Menu} from "antd";
import {useState} from "react";

import {HomeOutlined, UserAddOutlined, VideoCameraTwoTone} from "@ant-design/icons"
import Router from '../../routes';
const { Content, Footer, Sider } = Layout;


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>

        <Menu.Item key="1">
          <HomeOutlined />
            <span className="nav-text">Home</span>
            <a href="/"></a>
          </Menu.Item>
          <Menu.Item key="2">
          <UserAddOutlined />
            <span className="nav-text"><a href="/user">User</a></span>
          </Menu.Item>
          
          <Menu.Item key="3">
          <VideoCameraTwoTone />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          
        </Menu>
      </Sider>
      <Layout>
      <Content >
          <div >
          </div>
        </Content>
        <Content >
          <div>
            {/* routes here */}
            <Router/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mandala Admin
        </Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default Sidebar