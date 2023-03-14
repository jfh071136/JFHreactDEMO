import React, { Component } from "react";

export default class RefHooks extends Component {
    Input02 = React.createRef() //使用CreatRef來儲存REF節點
    AlertPlaceholder = (e) => {
        const { Input01 } = this //抓取Ref的DOM標籤
        console.log(Input01.value) //輸出該DOM的值
    };

    CSLPlaceholder = () => {

        console.log(this.Input02.current.value)
    }

    Targettrigger = (e) => {
        //如果發生的事件與要抓取的物件是同一個，就能使用target方式直接抓取 e代表event
        console.log(e.target.value)
    }
    render() {
        return <div >
            <input ref={(c) => { this.Input01 = c }} placeholder='輸入框'>
            </input>{/* 必須使用回調函數的方式來抓取該ref的標籤 */}

            <button onClick={this.AlertPlaceholder} >ALERT!!
            </button> {/* 使用CLASS的CLICK觸發記得寫this來抓到該事件 */}

            <input ref={this.Input02} onBlur={this.CSLPlaceholder} placeholder="失去焦點輸入框">
            </input>{/* 可以直接使用該creatref名子的節點*/}

            <input onBlur={this.Targettrigger} placeholder="失去焦點輸入框">
            </input>{/*不使用ref直接抓取 */}

        </div>;
    }
}
