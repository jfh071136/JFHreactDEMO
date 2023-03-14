import React, { Component } from "react";

export default class Footer extends Component {

    HandleCheckall = (event) => {
        return this.props.CheckALL(event.target.checked)
    }
    render() {
        const { todolist } = this.props
        const DoneCount = todolist.length

        const DoneNumber = todolist.reduce((acc, cur) => {
            acc = acc + (cur.done ? 1 : 0)
            return acc
        }, 0)

        return (

            < div className="todo-footer" >
                <label>
                    <input onChange={this.HandleCheckall} checked={(DoneCount === DoneNumber && DoneNumber !== 0 ? true : false)} type="checkbox" />
                </label>
                <span>
                    <span >已完成{DoneNumber}</span> / 全部{DoneCount}
                </span>
                <button onClick={this.props.DeleteAllSelect} className="btn btn-danger">清除已完成任务</button>
            </div >
        );
    }
}
