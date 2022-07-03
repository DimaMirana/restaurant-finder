import React from 'react';
import "antd/dist/antd.min.css";
import { Layout } from "antd";


const HeaderComponent = () => {
    const { Header } = Layout;
    return <Header 
                className="site-layout-sub-header-background"
                style={{
                    padding: 0,
                    margin: '24px 16px 0',
                    backgroundColor: "#F7FAFF"
                }}>
                Hello From Header Component
            </Header>;
}



export default HeaderComponent;