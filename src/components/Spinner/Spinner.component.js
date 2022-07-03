import React from 'react';
import 'antd/dist/antd.min.css';
import { Space, Spin } from 'antd';

const SpinnerComponent = () => {
    return <Space size="medium">
        <Spin size="large"/>
    </Space>;
}

export default SpinnerComponent;