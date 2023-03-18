import React from "react";
import { useSelector } from 'react-redux';
export default function WeatherList() {

    const City = useSelector((state) => state.Weather.City);  //從store拿取數據


    return (
        <div>
            <hr />
            {City.name && (
                <div>
                    <p>你選擇的城市是:{City.name}</p>
                    <p>今日的氣溫是:{City.main.temp}度</p>
                    <p>最高溫:{City.main.temp_max}度</p>
                    <p>最低溫:{City.main.temp_min}度</p>
                    <p>體感溫度:{City.main.feels_like}度</p>
                </div>
            )}

        </div>
    );
}
