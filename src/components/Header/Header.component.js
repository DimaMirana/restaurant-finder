import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "antd/dist/antd.min.css";
import { Layout } from "antd";

import { setSlectedRestaurant } from '../../features/restaurantSlice';
import ButtonComponent from '../Button/Button.component';


const HeaderComponent = () => {
    const { Header } = Layout;
    
    const items = useSelector(state => state.restaurants.restaurantData);
    const selectedRestaurant = useSelector(state => state.restaurants.selectedRestaurant);
    const dispatch = useDispatch();
    const selectRandomRestaurant = () => {
        const randomSelect = items[Math.floor((Math.random() * items.length))]
        dispatch(setSlectedRestaurant(randomSelect));
    }
    const locateAllRestaurant = () => {
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