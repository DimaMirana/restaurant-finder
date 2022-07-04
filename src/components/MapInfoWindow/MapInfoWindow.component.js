import React from "react";
import {InfoWindow} from "@react-google-maps/api";
import 'antd/dist/antd.min.css';
import { Card } from 'antd';

const MapInfoWindowComponent = ({ showInfoCard, onClickHandler }) => {
    
    
    return (
        <InfoWindow
            position={{
                lat: showInfoCard.location.lat,
                lng: showInfoCard.location.lng,
            }}
            onCloseClick={() => {
                onClickHandler(null);
            }}
        >
            <Card title={showInfoCard.name}>
                <p>
                    {showInfoCard.location.address}
                </p>
            </Card>
        </InfoWindow>
    );
};

export default MapInfoWindowComponent;
