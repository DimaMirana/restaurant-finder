import React,{FC} from 'react';
import "antd/dist/antd.min.css";
import { Layout } from "antd";
import ButtonComponent from '../Button/Button.component';

import { setSlectedRestaurant } from '../../features/restaurantSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { Info } from '../../common/types';


const HeaderComponent: FC = () => {
    const { Header } = Layout;
    
    const items: Array<Info> = useAppSelector(state => state.restaurants.restaurantData);
    const selectedRestaurant: any = useAppSelector(state => state.restaurants.selectedRestaurant);
    const dispatch = useAppDispatch();
    
    const selectRandomRestaurant: Function = () => {
        const randomSelect: Info = items[Math.floor((Math.random() * items.length))]
        dispatch(setSlectedRestaurant(randomSelect));
    }
    const locateAllRestaurant: Function = () => {
        dispatch(setSlectedRestaurant(null));
    }
    return <Header 
                className="site-layout-sub-header-background"
                style={{
                    padding: 10,
                    margin: '24px 16px 0',
                    backgroundColor: "#F7FAFF",
                    display:"flex",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                <h1>See Your Nearby Restaurant</h1>
                {selectedRestaurant && <ButtonComponent
                    onClickHandler={locateAllRestaurant}
                    style={{marginLeft:'auto', backgroundColor:"#272250"}}
                    text={"Locate All Restaurant"} />}
                <ButtonComponent 
                    onClickHandler={selectRandomRestaurant}
                    style={{marginLeft:`${selectedRestaurant?'20px':'auto'}`,backgroundColor:"#272250"}} 
                    text={"Select Random Restaurant"}/>
                
            </Header>;
}



export default HeaderComponent;