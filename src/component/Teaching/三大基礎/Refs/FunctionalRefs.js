import React, { useRef } from "react";

export default function FunctionalRefs() {

    const Input01 = useRef();  //先定義Ref才可使用該DOM標籤
    const Input02 = useRef(undefined); //undenfined不輸入也可以


    const AlertPlaceholder = (e) => {
        console.log(Input01.current.value) //要使用current才能抓到該DOM
    };
    const CSLPlaceholder = () => {
        console.log(Input02.current.value)
    };

    return <div >

        <input ref={Input01} placeholder='輸入框'></input>  {/* ref直接輸入定義的標籤 */}
        <button onClick={() => AlertPlaceholder(0)} >ALERT!!</button>
        <input ref={Input02} onBlur={() => CSLPlaceholder()} placeholder="失去焦點輸入框"></input>   {/* 失去焦點的觸發方式 */}
    </div>;
}
