import React, { useState } from 'react'


export default function StateHooks() {
    //state初始化
    const [Iseasy, setIseasy] = useState(true); //useState使用數組的解構賦值
    const [index, setindex] = useState(0);
    const Degree = ['簡單', '普通', '困難']

    const HandleClick = () => {
        setIseasy(!Iseasy); //使用set 回調 來改變值

        setindex((index) => (index + 1) % 3); //函数式的setState


    }

    return (
        <div>
            <h1>{index}</h1> {/* 直接抓STATE定義的值 */}
            <h2 onClick={() => HandleClick()}>
                這是state的{Iseasy ? '基本' : '變化'}，難度是{Degree[index]}</h2 > {/* return內使用三元表達式 ?與:  */}
        </div>
    )
}