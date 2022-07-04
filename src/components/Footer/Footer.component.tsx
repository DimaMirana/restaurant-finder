import React,{FC} from 'react';
import "antd/dist/antd.min.css";
import { Layout } from "antd";




const FooterComponent:FC = () => {
    const { Footer } = Layout;
    return <Footer>POWERED BY ANT DESIGN AND FOURSQUARE API</Footer>;
}


export default FooterComponent;