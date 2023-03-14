import React, { Component } from 'react'

export default class StateF extends Component {
    //state初始化
    state = { Iseasy: true, Degree: ['簡單', '普通', '困難'], index: 0 }  //這是初始化狀態， state的值必須是對象

    //event
    HandleClick = () => { //必須要使用箭頭函數，this才能抓到外面的值，並且因為是實例所以調用時，必須加上this

        const { Iseasy } = this.state; //沒有賦值this.state無法抓到外面的數值

        this.setState((state) => {
            return { index: state.index + 1 }  //函数式的setState
        }, () => console.log(this.state.index)) //回調可以調最新的狀態數據

        this.setState({ Iseasy: !Iseasy }) //透過setState改變，才能使網頁去改變狀態
    }

    render() {
        const { Iseasy, Degree, index } = this.state //必須要解構賦值讓render去抓到this的值
        return (
            <div>
                <h1>{this.state.index}</h1> {/* 直接抓STATE定義的值 */}
                <h2 onClick={() => this.HandleClick()}>
                    這是state的{Iseasy ? '基本' : '變化'}，難度是{Degree[index]}</h2 > {/* return內使用三元表達式 ?與: */}
            </div>
        )
    }

}

