import React,{ useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants, setCenter, setSlectedRestaurant } from '../../features/restaurantSlice';
import { getCurrentGeoLocation } from '../../common/utils';
import AllRestaurantsComponent from '../../components/AllRestaurants/AllRestaurants.component';
import SpinnerComponent from '../../components/Spinner/Spinner.component';
import MapPage from '../Map/Map.component';
import NoPage from '../NoPage/NoPage.component';
import SerarchbarComponent from '../../components/Searchbar/Serarchbar.component';

const HomePage = () => {
    
    const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });
    
    const restaurants = useSelector(state => state.restaurants);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getCurrentGeoLocation(setLatLng);
        if (latLng.lat!==0){
            dispatch(fetchRestaurants(latLng));
            dispatch(setCenter(latLng));
            dispatch(setSlectedRestaurant(null));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, latLng.lat])
    
    return <div style={{minWidth:"100%",display:'flex', backgroundColor:"#F7FAFF"}}>
            {restaurants.loading && <SpinnerComponent/>}
            {!restaurants.loading && restaurants.error ? <NoPage/> : null}
            <div style={{minWidth:"50%", overflowY: 'auto',}}>
                <SerarchbarComponent/>
                <AllRestaurantsComponent/>
            </div>
            <div style={{minWidth:"50%"}}>
                <MapPage/>
            </div>
        </div>;
}

export default HomePage;