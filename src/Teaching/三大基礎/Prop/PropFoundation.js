import PropTypes from 'prop-types'
import React, { Component } from 'react'


export default class PropFoundation extends Component {

    static propTypes = { //對輸入的標籤屬性進行限制  記得只有T是大寫
        name: PropTypes.string.isRequired, //記得P跟T都是大寫
        gender: PropTypes.string.isRequired, //限制必須是字串與必須輸入值
        age: PropTypes.number,  //限制必須是數字
        speak: PropTypes.func, //限制必須是函式
    }
    static defaultProps = { //對無輸入值的標籤屬性給一個預設值
        name: '必須輸入',
        gender: "不男不女?",
        age: 0,
    };

    speak = (name) => {
        console.log("hello " + name)
    }
    render() {
        const { person } = this.props //必須先定義輸入標籤
        console.log(this);
        return (
            <div>
                {person.map((item, index) => ( //遍歷輸入的標籤
                    <div key={index}>
                        <li>人名: {item.name}</li>
                        <li>性別: {item.gender}</li>
                        <li>年齡: {item.age + 1}</li>
                        <button onClick={() => {
                            this.speak(item.name)
                        }}>Say Hello</button>
                    </div>
                ))}
            </div>)
    }
}









