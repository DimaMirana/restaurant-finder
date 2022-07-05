import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.min.css';
import {Input,Select,Row,Col} from 'antd';
import { setFilterRestaurant } from '../../features/restaurantSlice';
import { getFilterKey } from '../../common/utils';

const { Option } = Select;
const SerarchbarComponent = () => {
    const [searchValue,setSearchValue] =useState('');
    const [searchCategory,setSearchCategory] = useState(null);
    
    const items = useSelector(state => state.restaurants.restaurantData);
    const dispatch = useDispatch();
    const options = getFilterKey(items);
    
    const filteringResult = ()=>{
        let tempArr = [...items];

        // FILTER BY SEARCHED VALUE
        if (searchValue.length>0){
            tempArr = tempArr.filter(item => item.name.toLowerCase().includes(searchValue))
        }
        
        //FILTER BY CATEGORY
        if(searchCategory!=null){
            tempArr = tempArr.filter(item => item.categories[0].shortName===searchCategory)
        }

        return tempArr;
    }
    
    useEffect(() => {
        const filterData = filteringResult();
        dispatch(setFilterRestaurant(filterData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch,searchValue,searchCategory])
    
    return <div className="site-input-group-wrapper">
        <Input.Group size="large">
            <Row gutter={8} style={{width:"100%", margin: 0, padding: 0 }}>
                <Col span={10} style={{ width: "inherit", margin: 0, padding: 0 }}>
                    <Select
                        style={{width: "inherit"}}
                        defaultValue={searchCategory} 
                        allowClear
                        onChange={e=>{setSearchCategory(e)}}>
                        {options.map((item)=><Option key={item} value={item}>{item}</Option>)}
                    </Select>
                </Col>
                <Col span={14} style={{ margin: 0, padding: 0 }}>
                    <Input.Search
                        allowClear 
                        defaultValue={searchValue} 
                        onChange={(e)=>setSearchValue(e.target.value.toLowerCase())}
                        placeholder="Search Restaurant Name" />
                </Col>
            </Row>
        </Input.Group>
    </div>;
}



export default SerarchbarComponent;