import React, { Component } from "react";

export default class LifeFather extends Component {
    state = { Carname: "豐田" }


    ChangeCar = () => {
        this.setState({ Carname: "TOYOTA" })
    }

    render() {
        const person = [{ name: "Tom", gender: 'male', age: 20, },
        { name: "jerry", gender: 'female', age: 16, }]
        return (
            <div  >
                <button onClick={this.ChangeCar}>換車</button>
                <Test2 Carname={this.state.Carname} >
                </Test2>
            </div>)
    }
}
