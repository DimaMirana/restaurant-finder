import axios from "axios";
import { createSlice, createAsyncThunk,PayloadAction} from "@reduxjs/toolkit";
import { formatResponse } from "../common/utils";
import { latLngProps,state,Info } from "../common/types";


const initialState: state = {
    loading: false,
    restaurantData: [],
    error: '',
    selectedRestaurant:null,
    filteredRestaurants: [],
    center:{lat:0,lng:0},
}



export const fetchRestaurants = createAsyncThunk('GET_RESTAURANT_DATA', async (latLng: latLngProps) => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore/?"
    const params = {
        ll: `${latLng.lat === 0 ? 23.7925 : latLng.lat},${latLng.lng === 0 ? 90.4078 : latLng.lng}`,
        venuePhotos: 1,
        section: "food",
        client_id: "YZQZP1Q2HEJWMD5ZVBMIQD3VSZC1W4BQCCQTVFEPJWNHL0RK",
        client_secret: "ORHPL2VKKHUTB3KTJVDTB4D20AXBRCFKWVL12EPQNJNDFYBX",
        v: 20131124,
        radius: "3000",
    }
    // @ts-ignore
    const response= await axios.get(endPoint + new URLSearchParams(params));
    const restaurant = formatResponse(response);
    return restaurant;
})

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers:{
        setCenter:(state, action: PayloadAction<latLngProps>)=>{
            state.center = action.payload;
        },
        setSlectedRestaurant:(state, action: PayloadAction<any>)=>{
            state.selectedRestaurant= action.payload;
        },
        setFilterRestaurant:(state, action: PayloadAction<Info[]>)=>{
            state.filteredRestaurants = action.payload;
        }
        
    },extraReducers: builder => {
        builder.addCase(fetchRestaurants.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurants.fulfilled, (state, action: PayloadAction<Info[]>) => {
            state.loading = false;
            state.restaurantData = action.payload;
            state.filteredRestaurants = action.payload;
            state.error = '';
        })
        builder.addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = false;
            state.restaurantData = [];
            state.filteredRestaurants = [];
            state.error = action.error.message;
        })
    }
})

export const { setSlectedRestaurant, setCenter, setFilterRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;