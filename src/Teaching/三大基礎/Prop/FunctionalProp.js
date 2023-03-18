import PropTypes from 'prop-types'
import React, { Component } from 'react'


export default function FunctionalProp(props) {

    console.log(props);
    const { person } = props //必須先定義輸入標籤


    const speak = (name) => {
        console.log("hello " + name)
    }

    return (
        <div>
            {person.map((item, index) => ( //遍歷輸入的標籤
                <div key={index}>
                    <li>人名: {item.name}</li>
                    <li>性別: {item.gender}</li>
                    <li>年齡: {item.age + 1}</li>
                    <button onClick={() => {
                        speak(item.name)
                    }}>Say Hello</button>

                </div>
            ))}
        </div>)
}

Test2.propTypes = { //對輸入的標籤屬性進行限制
    person: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        age: PropTypes.number,
        speak: PropTypes.func,
    })),
}
