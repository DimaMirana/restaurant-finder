import React,{FC} from 'react';
import { Outlet } from "react-router-dom";
import "antd/dist/antd.min.css";
import { Layout } from "antd";

const ContentComponent:FC = () => {
    const { Content } = Layout;
    const styleObject = {
        'margin': '24px 16px 0', 
        'background-color': "#F7FAFF", 
        'max-height': '64vh',
        'display': "flex", 
        'flex-direction': "row"
    }
    
    return <Content 
        style={styleObject}>
        <Outlet />
    </Content>;
}



export default ContentComponent;