import React, { Component } from "react";
import Items from "../Items";

export default class List extends Component {
    render() {
        const { todolist, UpdateTodo, DeleteTodo } = this.props
        return (

            <ul className="todo-main">
                {todolist.map((item, index) => {
                    return <Items key={item.id} {...item} UpdateTodo={UpdateTodo} DeleteTodo={DeleteTodo} />; // 從父組件傳入的this.props不需要再加上this.就可以抓到了
                })}
            </ul>
        )


    }
}
