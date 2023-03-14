import React, { useEffect } from 'react';


export default function EffectHooks() {
    const [Count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {    // 相似於 componentDidMount 和 componentDidUpdate:
            console.log(1)      //組件載入或更新時執行
        }, 1000);

        return () => clearInterval(timer);//組件卸載時執行
    }, [Count]);//空括號代表什麼都不監聽，如果裡面有監聽值，值變化時就執行 

    function ADD() {

        setCount(Count + 1)
    }


    return (
        <div>
            <h2>Count:{Count}</h2>
            <button onClick={ADD}>+1</button>
        </div>
    );
}

