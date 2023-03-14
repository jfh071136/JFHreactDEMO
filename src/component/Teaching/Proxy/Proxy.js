import axios, { Axios } from "axios";
import React, { Component } from "react";

export default class Proxy extends Component {

    StudentHandle = () => {
        axios.get("http://localhost:3000/students").then((response) => {
            return console.log("susu", response.data)
        }, (reason) => {
            return console.log("ERROR", reason)
        })
    }
    CarHandle = () => {
        axios.get("http://localhost:3000/cars").then((response) => {
            return console.log("susu", response.data)
        }, (reason) => {
            return console.log("ERROR", reason)
        })
    }
    render() {
        return <div>
            <button onClick={this.StudentHandle}>獲取學生訊息</button>
            <button onClick={this.CarHandle}>獲取汽車訊息</button>
        </div>;
    }
}