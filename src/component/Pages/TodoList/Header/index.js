import React, { Component } from "react";
import { nanoid } from 'nanoid'

export default class Header extends Component {
    HendleKeyup = (event) => {
        const { target, code } = event
        if (code === "NumpadEnter" || code === "Enter") {
            if (target.value.trim() === "") return alert('值不得為空')
            const TodoItem = { id: nanoid(), name: target.value, done: false }
            return this.props.AddTodo(TodoItem)
        }

    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.HendleKeyup} placeholder="請輸入你的任務名稱，按Enter確認" />
            </div>
        )
    }
}
