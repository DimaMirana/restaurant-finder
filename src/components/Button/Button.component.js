import React from 'react';
import 'antd/dist/antd.min.css';
import { Button } from 'antd';

const ButtonComponent = ({text,style, onClickHandler}) => {
    return <Button 
        style={style} 
        type="primary"
        onClick={() =>onClickHandler()}>{text}</Button>
}



export default ButtonComponent;