import React,{FC} from "react";
import { Marker } from "@react-google-maps/api";
import { Info } from "../../common/types";

type AppProps = {
  value: Info;
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