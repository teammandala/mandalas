import React from 'react'
import {Layout, Menu} from "antd";
import {useState} from "react";

import {CustomerServiceFilled, CustomerServiceOutlined, HomeOutlined, UserAddOutlined, VideoCameraTwoTone} from "@ant-design/icons"
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
            <span className="nav-text">User</span>
            <a href="/user"></a>
          </Menu.Item>
          
          <Menu.Item key="3">
          <VideoCameraTwoTone />
            <span className="nav-text">nav 2</span>
          </Menu.Item>

          <Menu.Item key="4">
          <CustomerServiceFilled />
            <span className="nav-text">KYC Requests</span>
            <a href="kycrequest"></a>
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