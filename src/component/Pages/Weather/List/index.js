import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import axios from "axios";
export default function WeatherList() {

    const Weather = useSelector((state) => state.Weather.Weather);  //從store拿取數據
    const [City, setCity] = useState({});


    const onClick = ({ key }) => {
        setCity(Weather.find((item) => {
            const id = item.id.toString()
            return id === key
        }))
    };

    function getItem(key, label) {
        return {
            key,
            label,

        }
    }

    const items = Weather.map((item) => {
        return getItem(item.id, item.name)
    })






    return (
        <div>
            <Dropdown
                menu={{
                    items,
                    onClick,
                }}
            >
                <a  >
                    <Space >
                        點擊你想查看的城市
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <hr></hr>
            <p>你選擇的城市是:{City.name}</p>
            <p>今日的氣溫是:{City.main.temp}度</p>
            <p>最高溫:{City.main.temp_max}度</p>
            <p>最低溫:{City.main.temp_min}度</p>
            <p>體感溫度:{City.main.feels_like}度</p>


        </div>
    );
}
