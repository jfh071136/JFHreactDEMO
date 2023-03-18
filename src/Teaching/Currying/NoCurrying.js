import React, { Component } from "react";

export default class NoCurrying extends Component {

    state = { Account: "", Password: "" } //state初始化

    FormHandle = (data, event) => {  //一次帶入兩個參數就不須使用柯里化寫法
        this.setState({ [data]: event.target.value })  //記得要抓物件裡的屬性要用 [] 才能賦值

    }


    SubmitHandle = (event) => {
        event.preventDefault()  //防止頁面整個刷新
        alert('你的帳號是:' + this.state.Account + '你的密碼是:' + this.state.Password)
    }



    render() {
        return <div >
            <form onSubmit={this.SubmitHandle} >
                帳號:<input onChange={(event) => this.FormHandle('Account', event)} name="account"></input>
                {/* 在onChange裡先給一個箭頭函式在呼叫函式就可輸入event與其他值 */}
                密碼:<input onChange={(event) => this.FormHandle('Password', event)} name="password"></input>
                <button name="submit" >送出</button>
            </form>
        </div>;
    }
}
