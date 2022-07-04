/**
 * FORMAT THE RESPONSE HERE
 * @param {*} response 
 * @returns {*} state storable data
 */
export const formatResponse = (response) => {
    let restaurant = [];
    let data = response.data.response.groups[0].items;
    data.forEach((item) => {
        restaurant.push(item.venue);
    });
    return restaurant;
}

/**
 * GET THE CATEGORY OF THE FETCHED FOOD ITEM
 * @param {*} DATA 
 * @returns {*} CATEGORY ARRAY
 */
export const getFilterKey = (data) => {
    let searchKey = [];
    data.forEach((item) => {
        let type = item.categories[0].shortName;
        searchKey.push(type);
    })
    const filterKey = [...new Set(searchKey)];
    return  filterKey;
}

/**
 * GET CURRENT LOCATION
 * @param {*}  empty 
 * @returns {*} LAT LNG OF CURRENT POSITION
 */
export const getCurrentGeoLocation = (setLatLng) => {
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