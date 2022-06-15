import React from 'react'
import {Layout, Menu} from "antd";
import {useState} from "react";

import {CustomerServiceFilled, CustomerServiceOutlined, FileImageTwoTone, HomeOutlined, UserAddOutlined, VideoCameraTwoTone} from "@ant-design/icons"
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
            <span className="nav-text">Home<a href="/"></a></span>
            
          </Menu.Item>
          <Menu.Item key="2">
          <UserAddOutlined />
            <span className="nav-text">User<a href="/user"></a></span>
            
          </Menu.Item>
          
          <Menu.Item key="3">
          <FileImageTwoTone />
            <span className="nav-text">Carousel <a href="/carousel"></a> </span>
          </Menu.Item>

          <Menu.Item key="4">
          <CustomerServiceFilled />
            <span className="nav-text">KYC Requests<a href="kycrequest"></a></span>
            
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