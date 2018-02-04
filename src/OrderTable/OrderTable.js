import React, { Component } from 'react';
import "./OrderTable.css"


function OrderTable (props){
    let totalPrice = 0;
    return (
        <div className="OrderTable">
                {props.goods.map((good) => {
                    totalPrice += good.price;
                return <p key={good.id}>{good.good}{good.price} <button onClick={() => props.remove(good.id)}>Delete</button></p>
        })
        }
        <div className="Spent" onChange={props.changePrice}>Total spent:</div>
        </div>
    );
}
export default OrderTable;