import React, { Fragment } from 'react';
import AllRestaurantsComponent from '../../components/AllRestaurants/AllRestaurants.component';
import MapComponent from '../Map/Map.component';

const HomePage = () => {
    
    return <Fragment style={{ backgroundColor:"#F7FAFF"}}>
            <div style={{width:"40%", overflowY: 'auto',}}>
                <AllRestaurantsComponent/>
            </div>
            <div style={{width:"60%"}}>
                <MapComponent/>
            </div>
        </Fragment>;
}

export default HomePage;