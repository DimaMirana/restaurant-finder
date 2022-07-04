import React,{FC} from "react";
import {InfoWindow} from "@react-google-maps/api";
import 'antd/dist/antd.min.css';
import { Card } from 'antd';

type AppProps = {
    showInfoCard: {
        name: string,
        location: {
            lat: number,
            lng: number,
            address: string,
        }
    };
    onClickHandler: Function;
};

const MapInfoWindowComponent:FC<AppProps> = ({ showInfoCard, onClickHandler }) => {
    
    
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
