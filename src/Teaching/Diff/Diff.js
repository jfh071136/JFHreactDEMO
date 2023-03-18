import React, { Component } from "react";

export default class Diff extends Component {

    person = [{ name: "Tom", gender: 'male', age: 20, },
    { name: "jerry", gender: 'female', age: 16, }] //資料來源

    state = { person: this.person } //初始化state


    Addperson = () => {

        let { person } = this.state //注意如果不要再setState裡改變值的畫 不可用const定義為常量 使用let定義為變量

        const PP = { name: "Jack", gender: 'male', age: 25, }
        person = [PP, ...person]  //將值的改變從setState裡抽離出來
        this.setState({ person: person }) //setState 告訴react該重新渲染(render)了
    }

    render() {
        const { person } = this.state

        return <div>
            <ul>
                {person.map((item, index) => {     //遍歷
                    return <li key={item.name}>名子:{item.name} 性別: {item.gender} 年齡: {item.age}</li>;
                })}
            </ul>
            <button onClick={this.Addperson}>叫人</button>
        </div>;

    }
}
