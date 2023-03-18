import React, { Component } from "react";
import './index.css'
import List from "./List";
import Search from "./Search";

export default class GithubSearch extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>)
    }
}



