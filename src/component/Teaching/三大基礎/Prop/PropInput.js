import React, { Component } from 'react'
import PropFoundation from './PropFoundation'


export default class TestContent extends Component {

    speak = () => {
        console.log("hello")
    }

    render() {
        const person = [{ name: "Tom", gender: 'male', age: 20, speak: this.speak },
        { name: "jerry", gender: 'female', age: 16, speak: this.speak }]

        return <PropFoundation person = {person}></PropFoundation> //Prop輸入值不可修改 只能運算
    }
}

