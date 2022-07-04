import {Items,Response, Info} from './types';

/**
 * FORMAT THE RESPONSE HERE
 * @param {*} response 
 * @returns {*} state storable data 
 */
export const formatResponse = (response: Response): Array<Info> => {
    let restaurant: Array<Info> = [];
    let data = response.data.response.groups[0].items;
    data.forEach((item:{venue: Info} ) => {
        restaurant.push(item.venue);
    });
    return restaurant;
}

/**
 * GET THE CATEGORY OF THE FETCHED FOOD ITEM
 * @param {*} data Array<Info>
 * @returns {*} CATEGORY ARRAY String[]
 */
export const getFilterKey = (data:Array<Info>):String[] => {
    let searchKey:String[] = [];
    
    data.forEach((item:{categories:{shortName:String}}) => {
        let type = item.categories[0].shortName;
        searchKey.push(type);
    })
    
    const filterKey: String[] = Array.from(new Set(searchKey));
    return  filterKey;
}

/**
 * GET CURRENT LOCATION
 * @param {*}  stateSetter State Function
 * @returns {*} SET LAT LNG OF CURRENT POSITION 
 */
export const getCurrentGeoLocation = (setLatLng:Function): void => {
    navigator.geolocation.getCurrentPosition((response) => {
        setLatLng({
            lat: response.coords.latitude,
            lng: response.coords.longitude,
        });
    });
};

/**
 * STYLE OBJECT FOR SHOWING MAP
 * @param {*}  empty 
 * @returns {*} AN OBJECT COAINTAINING STYLE PROPERTY
 */
export const StyleObject = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
}