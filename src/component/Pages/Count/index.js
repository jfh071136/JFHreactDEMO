import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, AddCake, ZeroCake } from '../../../Redux/Action/index'; //導入reducer裡面的函數

export default function Count() {

    const dispatch = useDispatch(); //dispatch hooks 來傳送值給reducer

    const count = useSelector((state) => state.counter.value);  //從store拿取數據
    const CakeNumber = useSelector((state) => state.counter.CakeNumber);

    const countselect = useRef();   //使用ref hooks 來拿到該ref
    const BuyNumber = useRef();

    function CountHandle(type) {
        const { value } = countselect.current //ref的解構賦值

        switch (type) {
            case 'increment':
                dispatch(increment(value * 1))
                break;
            case 'decrement':
                dispatch(decrement(value * 1))
                break;
            case 'Cardinalityhandle':
                if ((count + value * 1) % 2 !== 0) {
                    dispatch(increment(value * 1))
                }
                break;
            case 'Asynchandle':
                setTimeout(() => {
                    dispatch(increment(value * 1))
                }, 1000);
                break;
            default:
                break;
        }
    }
    function CakeHandle(type) {
        let { value } = BuyNumber.current //ref的解構賦值
        switch (type) {
            case 'add':
                value === "" ?
                    alert('請輸入值')
                    :
                    dispatch(AddCake(value * 1))
                break;

            case 0:
                dispatch(ZeroCake())
                break;
            default:
                break;
        }

    }

    return (
        <div>
            <div>
                <h2>當前的求和為:{count}</h2>
                <select ref={countselect} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>

                <button onClick={() => CountHandle('increment')}>+</button>
                <button onClick={() => CountHandle('decrement')}>-</button>
                <button onClick={() => CountHandle('Cardinalityhandle')}>答案為基數在加</button>
                <button onClick={() => CountHandle('Asynchandle')}>異步顯示答案</button>
                <hr></hr>
                <h2>蛋糕的數量為{CakeNumber}</h2>
                我要買<input ref={BuyNumber}></input>個蛋糕
                <br /><br />
                <button onClick={() => CakeHandle('add')}>蛋糕增加</button>
                <button onClick={() => CakeHandle(0)}>歸零</button>

            </div>
        </div>

    );
}

