import React from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { useState, useEffect } from 'react';


export default function App() {

    const navigate = useNavigate();
    useEffect(() => { //載入時執行
        navigate("/Nester/News", { replace: false })
        return () => {  //清除函數

        };
    }, []); //網頁更新時執行


    const [current, setCurrent] = useState('News');

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={'News'}>{'News'}</Link>,
            key: 'News',
        },
        {
            label: <Link to={'Message'}>{'Message'}</Link>,
            key: 'Message',
        },
    ];

    return <div>

        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

        <Outlet /> {/* 使用Outlet子路由的渲染位置 */}
    </div>


}


