import React, { Component } from "react";

export default class Items extends Component {
    state = { mouse: false }
    MouseFocus = (flag) => {
        this.setState({ mouse: flag })
    }

    HandleCheck = (event, id) => {
        return this.props.UpdateTodo(event.target.checked, id);  //checked是 input的勾選框是否勾選狀態
    }

    HandleDelete = (id) => {
        if (window.confirm('確定刪除嗎')) {
            return this.props.DeleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state

        return (

            <li className="Todoli" style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseEnter={() => this.MouseFocus(true)} onMouseLeave={() => this.MouseFocus(false)}>
                <label >
                    <input type="checkbox" checked={done} onChange={(event) => this.HandleCheck(event, id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.HandleDelete(id)} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>删除</button>
            </li>


        )
    }
}
