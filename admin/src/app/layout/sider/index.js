import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Topnavigation from "../navbar";
import {
  CustomerServiceFilled,
  FileImageTwoTone,
  HomeOutlined,
  UserAddOutlined,
  CheckCircleOutlined,
  ContactsTwoTone,
} from "@ant-design/icons";
import Router from "../../routes";
import getUser from "../../api/user";
import { useNavigate } from "react-router-dom";
import Noaccess from "../../pages/noaccess";
import "./style.css";

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
      <div>
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
                    left: 0,
                  }}
                >
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={[""]}>
                    <Menu.Item key="1">
                      <HomeOutlined />
                      <span className="nav-text">
                        Home<a href="/"></a>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <UserAddOutlined />
                      <span className="nav-text">
                        User<a href="/user"></a>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <FileImageTwoTone />
                      <span className="nav-text">
                        Carousel <a href="/carousel"></a>{" "}
                      </span>
                    </Menu.Item>

                    <Menu.Item key="4">
                      <CustomerServiceFilled />
                      <span className="nav-text">
                        KYC Requests<a href="kycrequest"></a>
                      </span>
                    </Menu.Item>

                    <Menu.Item key="5">
                      <CheckCircleOutlined />
                      <span className="nav-text">
                        Auction Requests<a href="/auctionrequest"></a>
                      </span>
                    </Menu.Item>

                    <Menu.Item key="6">
                      <ContactsTwoTone />
                      <span className="nav-text">
                        Contact Requests<a href="/contactrequest"></a>
                      </span>
                    </Menu.Item>
                  </Menu>
                </Sider>
              );
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
                    left: 0,
                  }}
                >
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={[""]}>
                    <Menu.Item key="1">
                      <HomeOutlined />
                      <span className="nav-text">
                        No Access<a href="/"></a>
                      </span>
                    </Menu.Item>
                  </Menu>
                </Sider>
              );
            }
          })()}
          <Layout className="body-background">
            <Content className="body-background">
              <div>
                <Topnavigation />
              </div>
            </Content>
            <Content className="body-background">
              {(() => {
                if (isAdmin) {
                  return (
                    <div className="body-background container-fluid">
                      {/* routes here */}
                      <Router />
                    </div>
                  );
                } else {
                  return <Noaccess />;
                }
              })()}
            </Content>
            <Footer style={{ textAlign: "center" }}>Mandala Admin</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Sidebar;
