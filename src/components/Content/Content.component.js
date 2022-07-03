import React from 'react';
import { Outlet } from "react-router-dom";
import "antd/dist/antd.min.css";
import { Layout } from "antd";

const ContentComponent = () => {
    const { Content } = Layout;
    return <Content 
        style={{ margin: '24px 16px 0', backgroundColor: "#F7FAFF" }}>
        <Outlet />
    </Content>;
}



export default ContentComponent;