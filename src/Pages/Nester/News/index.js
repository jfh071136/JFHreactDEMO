import React, { Component } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default class News extends Component {
    NewsLink = [
        { id: '01', title: "NEWS1" },
        { id: '02', title: "NEWS2" },
        { id: '03', title: "NEWS3" },
    ]
    render() {
        return <div>
            <ul>
                {this.NewsLink.map((item,) => {
                    return <li key={item.id}>
                        <Link to={`NewsContent/?${item.id}&${item.title}`}>{item.title}</Link>
                    </li>
                })}
            </ul>
            <Outlet />
        </div>
    }
}

