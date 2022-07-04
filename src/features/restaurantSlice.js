import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatResponse } from "../common/utils";

const initialState = {
    loading: false,
    restaurantData: [],
    restaurantCategory: [],
    error: '',
    selectedRestaurant:null,
    filteredRestaurants: [],
    center:{},
}

export const fetchRestaurants = createAsyncThunk('GET_RESTAURANT_DATA', async (latLng) => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore/?"
    const params = {
        ll: `${latLng.lat.length === 0 ? 23.8125056 : latLng.lat},${latLng.lng.length === 0 ? 90.3643136 : latLng.lng}`,
        venuePhotos: 1,
        section: "food",
        client_id: "YZQZP1Q2HEJWMD5ZVBMIQD3VSZC1W4BQCCQTVFEPJWNHL0RK",
        client_secret: "ORHPL2VKKHUTB3KTJVDTB4D20AXBRCFKWVL12EPQNJNDFYBX",
        v: 20131124,
        radius: "3000",
    }
    const response = await axios.get(endPoint + new URLSearchParams(params));
    const [restaurant, categories] = formatResponse(response);
    return [restaurant, categories];
})

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers:{
        setCenter:(state, action)=>{
            state.center = action.payload;
        },
        setSlectedRestaurant:(state, action)=>{
            state.selectedRestaurant= action.payload;
        },
        
    },extraReducers: builder => {
        builder.addCase(fetchRestaurants.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.loading = false;
            state.restaurantData = action.payload[0];
            state.restaurantCategory = action.payload[1];
            state.error = '';
        })
        builder.addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = false;
            state.restaurantData = [];
            state.error = action.error.message;
        })
    }
})

export const { setSlectedRestaurant, setCenter } = restaurantSlice.actions;

export default restaurantSlice.reducer;