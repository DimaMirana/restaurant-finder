import React from "react";
import { Marker } from "@react-google-maps/api";

const MarkerComponent = ({value,onClickHandler})=>{
    return <Marker
        key={value.id}
        position={{
            lat: value.location.lat,
            lng: value.location.lng,
        }}
        onClick={() =>onClickHandler(value)}
    />
}

export default MarkerComponent;