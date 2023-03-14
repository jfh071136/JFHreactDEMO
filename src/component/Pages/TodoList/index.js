import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import List from './List'
import './index.css';



export default class TodoList extends Component {
    state = {
        todolist: [{
            id: 1,
            name: "吃飯",
            done: true
        },
        {
            id: 2,
            name: "睡覺",
            done: true
        },
        {
            id: 3,
            name: "打咚咚",
            done: false
        }]
    }

    AddTodo = (TodoItem) => {
        let { todolist } = this.state
        const NewTodolist = [TodoItem, ...todolist]
        this.setState({ todolist: NewTodolist })

    }

    UpdateTodo = (checked, id) => {
        const { todolist } = this.state
        todolist.map((item) => {
            if (item.id === id) { item.done = checked }
            return item
        })
        this.setState({ todolist })
    }
    DeleteTodo = (id) => {
        const { todolist } = this.state
        const TodoObj = todolist.filter((item) => {
            return item.id !== id
        })
        this.setState({ todolist: TodoObj })
    }
    CheckALL = (done) => {
        const { todolist } = this.state
        const Allselect = todolist.map((item) => {
            item.done = done
            return item
        })
        this.setState({ todolist: Allselect })

    }

    DeleteAllSelect = () => {
        const { todolist } = this.state
        const NewTodolist = todolist.filter((item) => {
            return item.done === false
        })
        this.setState({ todolist: NewTodolist })

    }
    render() {
        const { todolist } = this.state
        return <div>

            <div className="todo-container">
                <div className="todo-wrap">
                    <Header AddTodo={this.AddTodo} /> {/* 要從子組件回傳值就必須使用輸入函式給子組件的方式來進行回傳 */}
                    <List UpdateTodo={this.UpdateTodo} todolist={todolist} DeleteTodo={this.DeleteTodo} />
                    <Footer todolist={todolist} CheckALL={this.CheckALL} DeleteAllSelect={this.DeleteAllSelect} />
                </div>
            </div>


        </div>;
    }
}
