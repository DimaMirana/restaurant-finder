import React from 'react';
import { Outlet } from "react-router-dom";
import "antd/dist/antd.min.css";
import { Layout } from "antd";

const ContentComponent = () => {
    const { Content } = Layout;
    const styleObject = {
        margin: '24px 16px 0', 
        backgroundColor: "#F7FAFF", 
        maxHeight: '64vh',
        display: "flex", 
        flexDirection: "row",}
    return <Content 
        style={styleObject}>
        <Outlet />
    </Content>;
}



export default ContentComponent;