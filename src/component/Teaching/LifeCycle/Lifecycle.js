import React, { Component } from "react";

export default class Lifecycle extends Component {

    constructor(props) { //最早執行 子宮內
        super(props)
    }
    state = { Dis: false, opacity: 1, }

    Delete = () => {
        clearInterval(this.timer)
        let { Dis } = this.state;
        this.setState({ Dis: !Dis });


        console.log(Dis)
    };


    componentDidMount() { //Render前執行 將要出生 !!重要 初始化處理:定時器、發送網路請求、訂閱消息
        this.timer = setInterval(() => {
            let { opacity } = this.state
            opacity = opacity - 0.1
            if (opacity <= 0) opacity = 1

            this.setState({ opacity: opacity })
        }, 200);
    }

    componentWillUnmount() { //卸載前執行 將要死亡 !!重要 收尾處理:關閉定時器、取消訂閱消息
        console.log('unmounting');
        clearInterval(this.timer)
    }

    shouldComponentUpdate() { //STATE更新時會從這開始 
        return true //如果return false 網頁就不會render ，如果不寫return 會是 undenfined 報錯
    }

    force = () => {
        this.forceUpdate(() => {
            console.log("強制更新")
        })
    }


    render() { //出生

        const { Dis, opacity } = this.state;

        const Mystytle = {
            opacity: opacity,
            display: Dis ? "none" : "flex",
        };


        return <div  >
            <p style={Mystytle}>
                我要不見了
            </p>
            <button onClick={this.Delete}>刪除</button>
            <button onClick={this.force}>強制更新</button>
            <p>
                我的車是{this.props.Carname}
            </p>
        </div>

    }
}

