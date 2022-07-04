import React, { useState } from 'react';
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import { useSelector} from 'react-redux';


import MarkerComponent from "../../components/MapMarker/MapMarker.component"
import MapInfoWindowComponent from '../../components/MapInfoWindow/MapInfoWindow.component';
import { StyleObject } from '../../common/utils';

const libraries = ["places"];

const MapPage = () => {
    
    const [showInfoCard, setShowInfoCard] = useState(null);
    
    const mapContainerStyle = {
        width: "inherit",
        height: "64vh",
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    
    const restaurants = useSelector(state => state.restaurants.filteredRestaurants);
    const center = useSelector(state => state.restaurants.center);
    const selectedRestaurant = useSelector(state => state.restaurants.selectedRestaurant);
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    
    return <div className={StyleObject.main}>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
                {selectedRestaurant ? (
                    <MarkerComponent value={selectedRestaurant}
                    onClickHandler={() => setShowInfoCard(selectedRestaurant)} />
                ) : (
                    restaurants &&
                    restaurants.map((item) => (
                        <MarkerComponent key={item.id} value={item}
                            onClickHandler={() => setShowInfoCard(item)} />
                    ))
                )}
                {showInfoCard ? (
                    <MapInfoWindowComponent showInfoCard={showInfoCard} onClickHandler={setShowInfoCard}/>
                ) : null}
            </GoogleMap>
            
        </div>;
}


export default MapPage;