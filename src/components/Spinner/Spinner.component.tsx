import React,{FC} from 'react';
import 'antd/dist/antd.min.css';
import { Space, Spin } from 'antd';

const SpinnerComponent: FC = () => {
    return <Space size="middle">
        <Spin size="large"/>
    </Space>;
}

export default SpinnerComponent;