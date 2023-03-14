import React, { useState, memo } from "react";



export default function Home() {
    const [car, setCar] = useState({ band: 'BMW', price: 1000 });

    const changeCar = () => {
        setCar({ band: '賓士', price: 1500 });
    };

    console.log('Father');

    return (
        <div>
            車子是: {car.band}
            <button onClick={changeCar}>換車</button>
            <Index />
        </div>
    );
}

const Index = memo(() => { //套上memo優化組件
    console.log('Child');
    return <div>價格是:{1000}</div>;
});