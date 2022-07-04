import React,{FC} from 'react';
import 'antd/dist/antd.min.css';
import { Button } from 'antd';

type AppProps = {
    text:string,
    style:any,
    onClickHandler: Function;
};

const ButtonComponent: FC<AppProps> = ({text,style, onClickHandler}) => {
    return <Button 
        style={style} 
        type="primary"
        onClick={() =>onClickHandler()}>{text}</Button>
}



export default ButtonComponent;