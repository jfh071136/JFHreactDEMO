import React, { Component } from "react";
import axios from "axios";
import PubSub from 'pubsub-js'
export default class Search extends Component {


    searchHandle = () => {
        PubSub.publish('GitSearch', { IsFirst: false, IsLoading: true, Error: "" });   //推送消息去改變值
        const { Input: { value } } = this  //連續解構賦值該Input的value

        axios.get(`https://api.github.com/search/users?q=${value}`).then((response) => {
            PubSub.publish('GitSearch', { users: response.data.items, IsLoading: false });
        }, (reason) => {

            PubSub.publish('GitSearch', { IsLoading: false, Error: reason.message }); //如果Error有值就會判斷為true

        })
    }
    render() {
        return (
            <section >
                <h3 >搜尋用戶</h3>
                <div>
                    <input ref={(c) => { this.Input = c }} type="text" placeholder="輸入用戶名" />&nbsp;
                    <button onClick={this.searchHandle}>搜尋</button>
                </div>
            </section>
        )
    }
}
