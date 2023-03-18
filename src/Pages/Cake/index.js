import React, { Component } from "react";
import { connect } from 'react-redux';
import { AddCake, addcakeList, deletecakeList } from "../../Redux/Action/Cake";
import { List } from 'antd';

const mapStateToProps = state => {  //將store的值取出

    return {
        Cake: state.Cake.value,
        cakeList: state.Cake.cakeList
    }
}

const mapDispatchToProps = dispatch => { //將action動作取出

    return {
        AddCake: () => dispatch(AddCake()),
        addcakeList: (Cakenumber) => dispatch(addcakeList(0, Cakenumber)),
        deletecakeList: (value) => dispatch(deletecakeList(value)),
    }
}

class Cake extends Component {

    CakeHandler = () => {

        this.props.AddCake(); //dispatch給reducer
    }
    CakeOutput = (Cakenumber) => {
        this.props.addcakeList(Cakenumber);
    }
    DeleteCake = (event) => {
        const { value } = event.target
        this.props.deletecakeList(value);
    }

    render() {
        const { Cake, cakeList } = this.props;
        return (
            <div>
                <h2>蛋糕的數量是{Cake}</h2>
                <button onClick={() => this.CakeHandler()}>+1</button>
                <button onClick={() => this.CakeOutput(Cake)}>出口蛋糕</button>
                <List
                    size="large"
                    header={<div>蛋糕好ㄘ</div>}
                    bordered
                    dataSource={cakeList}
                    renderItem={(item) =>
                        <List.Item
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            key={item.id}>{item.quantity} 個蛋糕
                            <button
                                value={item.id}
                                onClick={(event) => this.DeleteCake(event)} >
                                刪除
                            </button></List.Item>
                    }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
