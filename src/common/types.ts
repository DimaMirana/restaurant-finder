export type latLngProps = {
    lat:number,
    lng:number
};

export interface Info  {
    categories:{
        shortName: string
    },
    id: string,
    location: {
        lat: number,
        lng: number,
        address: string,
        city: string,
        country: string,
    },
    rating: number,
    name: string,
}

export type Items = { 
    venue: Info
}
export type Response = { 
        data:{
            response:{
                groups:{
                    items: Array<Items>
                }
            }
        }
}

export type state= {
    loading: boolean;
    restaurantData: Array<Info>;
    error: any;
    selectedRestaurant: any;
    filteredRestaurants:Array<Info>;
    center: latLngProps;
}

