/**
 * FORMAT THE RESPONSE HERE
 * @param {*} response 
 * @returns {*} state storable data
 */
export const formatResponse = (response) => {
    let searchKey = [];
    let restaurant = [];
    let data = response.data.response.groups[0].items;
    data.forEach((item, index) => {
        restaurant.push(item.venue);
        let type = item.venue.categories[0].shortName;
        searchKey.push(type);
    })
    const filterKey = [...new Set(searchKey)]
    return [restaurant, filterKey];
}