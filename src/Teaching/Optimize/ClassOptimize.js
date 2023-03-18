import React, { PureComponent } from "react";

export default class Home extends PureComponent {  //組件使用PureComponent進行效能優化
    state = { car: { band: 'BMW', price: 1000 } }

    Change = () => {
        this.setState({ car: { band: '賓士', price: 1500 } })

    }
    render() {
        console.log('Father')
        return <div>
            車子是: {this.state.car.band}
            <button onClick={this.Change}>換車</button>
            <Index car={this.state.car} /> {/* 如果child的props沒有變化的話 PureComponent會使子組件不必再render一次 */}
        </div>;
    }
}



export class Index extends PureComponent {
    render() {
        console.log('Child')
        return <div>
            價格是:{1000}
        </div>;
    }
}
