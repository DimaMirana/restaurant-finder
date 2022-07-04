import React, {  Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.min.css';
import { Card, Col, Row } from 'antd';
import { setSlectedRestaurant } from '../../features/restaurantSlice';

const AllRestaurantsComponent = () => {
    const restaurants = useSelector(state => state.restaurants);
    const dispatch = useDispatch();
    
    const onClickHandler = (value) => {
        dispatch(setSlectedRestaurant(value));
    }
    
    return <Fragment>
        {!restaurants.loading && restaurants.filteredRestaurants.length ? (
            <div className="site-card-wrapper">
                <Row gutter={16} style={{margin:0,padding:0}}>
                        {restaurants.filteredRestaurants.map((item, id) => (
                            <Col style={{ margin: 0, padding: '8px' }} key={item.id} span={12}>
                                <Card
                                    style={{ margin: 0, padding: '8px' }}
                                    key={id}
                                    bordered={true}
                                    title={item.name}
                                    onClick={() => onClickHandler(item)}/>
                            </Col>
                        ))}
                </Row>
            </div>
        ) : null}
    </Fragment>;
}


export default AllRestaurantsComponent;