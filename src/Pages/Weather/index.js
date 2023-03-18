import axios from "axios";
import { useDispatch } from 'react-redux';
import { getWeather } from '../../Redux/Action/Weather'; //導入reducer裡面的函數
import { useEffect, useState } from "react";
import WeatherList from "./List";
import { Loading } from "../../component/layout/Loading";
import SearchBar from "./SearchBar";



export default function Weather() {

    const dispatch = useDispatch(); //dispatch hooks 來傳送值給reducer
    const [Isloading, setIsloading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            try {
                setIsloading(true)
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/box/city?bbox=120,19,122,30,10&appid=cb9de36bbd3a6969b700004716fd3036`);
                setIsloading(false)
                return dispatch(getWeather(response.data.list))

            } catch (error) {
                console.log(error);

                return null; // 在出現錯誤時返回 null 或其他錯誤值
            }
        }
        fetchData();
    }, [dispatch]);


    return <div>
        <SearchBar></SearchBar>
        {Isloading ? <Loading /> : <WeatherList />}




    </div>;
}
