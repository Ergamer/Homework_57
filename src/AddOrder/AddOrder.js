import React, { Component } from 'react';
import "./AddOrder.css"

function AddOrder (props){
    return (
        <div className="AddOrder">
            <div>
                <input type="text" placeholder="Add your good" onChange={props.changeGood}/>
                <input type="text" placeholder="Your price" onChange={props.changePrice}/>KGS
                <button onClick={props.addTask} onChange={props.changePrice}>Add</button>
            </div>
        </div>
    );
}
export default AddOrder;