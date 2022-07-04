import React from 'react';
import "antd/dist/antd.min.css";
import { Layout } from "antd";
import Sidebar from '../../components/Sidebar/Sidebar.component';
import FooterComponent from '../../components/Footer/Footer.component';
import HeaderComponent from '../../components/Header/Header.component';
import ContentComponent from '../../components/Content/Content.component';


const UILayout: React.FC = () => {
    const styleObject = {
        minHeight: "100vh",
        padding: "25px 25px",
        backgroundColor: "#E9EDF3"
    }
    return <Layout style={styleObject}>
        <Sidebar/>
        <Layout>
            <HeaderComponent/>
            <ContentComponent/>
            <FooterComponent/>
        </Layout>
    </Layout>;
}


export default UILayout;