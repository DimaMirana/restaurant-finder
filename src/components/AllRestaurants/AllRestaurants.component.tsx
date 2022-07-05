import React, {  Fragment, FC } from 'react';
import 'antd/dist/antd.min.css';
import { Card, Col, Row } from 'antd';
import { setSlectedRestaurant } from '../../features/restaurantSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { state } from '../../common/types';

const AllRestaurantsComponent: FC = () => {
    const restaurants: state = useAppSelector(state => state.restaurants);
    
    const dispatch = useAppDispatch();
    
    const onClickHandler: Function = (value:any) => {
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
                                    onClick={() => onClickHandler(item)}>
                                        <p>RATINGS: {item.rating}</p>
                                        <p>KNOWN FOR: {item.categories[0].shortName}</p>
                                    </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        ) : null}
    </Fragment>;
}


export default AllRestaurantsComponent;