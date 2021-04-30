import React from "react";
import { Menu, ConfigProvider, Layout } from "antd";
import zhCN from "antd/lib/locale/zh_CN";

import Employee from "./employee";
import Setting from "./setting";

import "./App.css";

const { Header, Content, Footer } = Layout;

const App = () => (
  <ConfigProvider locale={zhCN}>
    <Layout>
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          className="menu"
          defaultSelectedKeys={["employee"]}
        >
          <Menu.Item key="employee">员工管理</Menu.Item>
          <Menu.Item key="setting"> 系统设置</Menu.Item>
        </Menu>
      </Header>
      <Content className="contentWrap">
        <div className="content">
          <Employee />
          {/* <Setting /> */}
        </div>
      </Content>
      <Footer className="footer">
        项目地址：{" "}
        <a href="https://github.com/pinkqq/ts-react-app">
          https://github.com/pinkqq/ts-react-app
        </a>
      </Footer>
    </Layout>
  </ConfigProvider>
);

export default App;
