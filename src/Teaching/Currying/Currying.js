import React, { Component } from "react";

export default class Currying extends Component {

    state = { Account: "", Password: "" } //state初始化

    FormHandle = (data) => {    //第一個參數為輸入的資料類型
        return (event) => {     //第二個為該DOM的target
            this.setState({ [data]: event.target.value })  //記得要抓物件裡的屬性要用 [] 才能賦值
        }
    }

    SubmitHandle = (event) => {
        event.preventDefault()  //防止頁面整個刷新
        alert('你的帳號是:' + this.state.Account + '你的密碼是:' + this.state.Password)
    }


    render() {
        return <div >
            <form onSubmit={this.SubmitHandle} >
                帳號:<input onChange={this.FormHandle('Account')} name="account"></input>
                {/* 如果要在裡面傳參數就必須在return一個參數才可以抓到該DOM的值 */}
                密碼:<input onChange={this.FormHandle('Password')} name="password"></input>
                <button name="submit" >送出</button>
            </form>
        </div>;
    }
}
