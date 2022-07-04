import React,{FC} from "react";
import { Marker } from "@react-google-maps/api";

type AppProps = {
  value: {
    id:number,
    location:{
        lat:number,
        lng:number
    }
  };
  onClickHandler: Function;
};

const MarkerComponent: FC<AppProps> = ({value,onClickHandler})=>{
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