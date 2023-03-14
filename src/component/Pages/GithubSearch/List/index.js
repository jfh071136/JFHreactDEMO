import React, { Component } from "react";
import PubSub from 'pubsub-js'

export default class List extends Component {
    state = {  //一開始儲存各個條件判斷
        users: [],
        IsFirst: true,
        IsLoading: false,
        Error: ""
    }
    componentDidMount() {
        this.GitSearch = PubSub.subscribe('GitSearch', (msg, data) => { //接收訂閱消息
            this.setState(data) //儲存消息並改變state
        });

    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.GitSearch) //取消訂閱
    }
    render() {
        const { IsFirst, IsLoading, Error, users } = this.state;
        return (
            <div className="row">
                {
                    IsFirst ? <h2>歡迎使用，輸入文字來搜索</h2> :
                        IsLoading ? <h2>讀取中...</h2> :
                            Error ? <h2>{Error}</h2> :
                                users.map((item) => {
                                    return <div key={item.id} className="GITcard">
                                        <a href={item.html_url} target="_blank" rel="noreferrer">
                                            <img src={item.avatar_url} style={{ width: '100px' }} alt="圖片載入失敗" />
                                        </a>
                                        <p className="GITcard-text">{item.login}</p>
                                    </div>
                                })
                }

            </div>)
    }
}
