import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Menu, Space } from 'antd';

export default function WeatherList() {

    const Weather = useSelector((state) => state.Weather.Weather);  //從store拿取數據


    return (
        <div>
            {Weather.map((item, index) => {
                return <p key={item.id}>{item.name}</p>
            })}
        </div>
    );
}
