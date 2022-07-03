import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.min.css';
import { Card } from 'antd';

import { fetchRestaurants } from '../../features/restaurantSlice';
import NoPage from '../../pages/NoPage/NoPage.component';
import SpinnerComponent from '../Spinner/Spinner.component';

const AllRestaurantsComponent = () => {
    const restaurants = useSelector(state => state.restaurants);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [dispatch])
    
    const styleObject = {
        width: '25%',
        textAlign: 'center',
    };
    
    return <Fragment>
        {restaurants.loading && <SpinnerComponent/>}
        {!restaurants.loading && restaurants.error ? <NoPage/> : null}
        {!restaurants.loading && restaurants.restaurantData.length ? (
            <Card title="List Of Restaurant">
                {restaurants.restaurantData.map((item, id) => (
                    <Card.Grid 
                        key={id}
                        onClick={()=>console.log(item)} 
                        style={styleObject}>{item.name}</Card.Grid>
                ))}
            </Card>
        ) : null}
    </Fragment>;
}


export default AllRestaurantsComponent;