import "antd/dist/antd.min.css";
import React, { Fragment, useState, useEffect, FC } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from "antd";
import { HomeOutlined, EyeOutlined, RetweetOutlined } from '@ant-design/icons';


const Sidebar: FC = () => {
    const { Sider } = Layout;
    const [collapse, setCollapse] = useState(false);
    const onCollapse = (collapse: boolean | ((prevState: boolean) => boolean)) => {
        setCollapse(collapse);
    }

    let location = useLocation();
    const [current, setCurrent] = useState(location.pathname);
    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    return <Fragment>
        <Sider
            collapsible
            collapsed={collapse}
            onCollapse={onCollapse}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]} selectedKeys={[current]}>
                <Menu.Item key="/">
                    <Link to="/">
                        <HomeOutlined />
                        <span>Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/viewed">
                    <Link to="/viewed">
                        <EyeOutlined />
                        <span>Recently Viewed</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/about">
                    <Link to="/about">
                        <RetweetOutlined />
                        <span>How This Works</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    </Fragment>;
}



export default Sidebar;