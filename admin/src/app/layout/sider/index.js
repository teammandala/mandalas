import React, { useEffect, useState } from 'react'
import { Layout, Menu } from "antd";
import Topnavigation from "../navbar";
import { CustomerServiceFilled, CustomerServiceOutlined, FileImageTwoTone, HomeOutlined, UserAddOutlined, VideoCameraTwoTone } from "@ant-design/icons"
import Router from '../../routes';
import getUser from '../../api/user';
import { useNavigate } from 'react-router-dom'
import Noaccess from '../../pages/noaccess';


const { Content, Footer, Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const [isAuctioneer, setIsAuctioneer] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = getUser.getCurrentUser();


    if (user) {
      setCurrentUser(user);
      setIsAdmin(user.role === "ADMIN");
      setIsAuctioneer(user.role === "AUCTIONEER");
      setIsUser(user.role === "USER");
    }
  }, []);



  return (
    <>
      <Layout>

        {(() => {
          if (isAdmin) {
            return (
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>



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
            )
          } else {
            return (
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[""]}>

                  <Menu.Item key="1">
                    <HomeOutlined />
                    <span className="nav-text">No Access<a href="/"></a></span>
                  </Menu.Item>
                </Menu>
              </Sider>
            )
          }
        })()}
        <Layout>
          <Content >
            <div >
              <Topnavigation />
            </div>
          </Content>
          <Content >

            {(()=>{
              if(isAdmin){
                return(
                  <div>
              {/* routes here */}
              <Router />
            </div>
                )
              }else{
                return(
                  <Noaccess />
                )
              }
            })()}
            
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