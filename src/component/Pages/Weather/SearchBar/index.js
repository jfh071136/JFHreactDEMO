import React, { useRef, useState } from 'react';
import { AutoComplete } from 'antd';

import { getCity } from '../../../../Redux/Action/Weather'
import { useSelector, useDispatch } from 'react-redux';



function SearchBar() {

    const dispatch = useDispatch(); //dispatch hooks 來傳送值給reducer
    const SearchbarRef = useRef();
    const [options, setOptions] = useState([]);

    const Weather = useSelector((state) => state.Weather.Weather);

    function getItem(value) {
        return {
            value,
        }
    }
    const items = Weather.map((item) => {
        return getItem(item.name)
    })


    const getPanelValue = (searchText) => {
        return items.filter((item) =>
            item.value.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const onSelect = (data) => {
        dispatch(getCity(data))

    };


    return (
        <>
            <AutoComplete
                ref={SearchbarRef}
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="input here"
            />
        </>
    );
}

export default SearchBar;
