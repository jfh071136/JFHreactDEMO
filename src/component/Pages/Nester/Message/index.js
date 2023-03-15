import React, { Component } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default class Message extends Component {
    messageLINK = [
        { id: '01', title: "消息1" },
        { id: '02', title: "消息2" },
        { id: '03', title: "消息3" },
    ]
    render() {
        return <div>
            <ul>
                {this.messageLINK.map((item, index) => {
                    return <li key={item.id}>
                        <Link to={`Detail/${item.id}/${item.title}`}>{item.title}</Link>
                    </li>
                })}
            </ul>
            <Outlet />
        </div>
    }
}
