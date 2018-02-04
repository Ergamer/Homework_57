import React, { Component } from 'react';
import './App.css';
import OrderTable from './OrderTable/OrderTable'
import AddOrder from './AddOrder/AddOrder'

class App extends Component {
    state = {
        totalPrice: ' ',
        goods: [],
        inputGood: '',
        inputPrice: '',
    };

    changeGood = (event) => {
      const value = event.target.value;
        this.setState({inputGood: value})
    };

    changePrice = (event) => {
        const value = event.target.value;
        this.setState({inputPrice: value})
    };


    addTask = (event) => {
        const addTask = [...this.state.goods];
        const nextTask = {
            good: this.state.inputGood,
            price: this.state.inputPrice,
            id: Date.now()
        };
        addTask.push(nextTask);
        this.setState({goods: addTask});

    };

    remove = (id) => {
        const goods = [...this.state.goods];
        const index = goods.findIndex(good => good.id === id);
        goods.splice(index, 1);
        this.setState({goods})
    };

  render() {

    return (
      <div className="App">
          <AddOrder changeGood={this.changeGood} changePrice={this.changePrice} addTask={this.addTask}/>
          <OrderTable goods={this.state.goods} remove={this.remove} changePrice={this.changePrice}/>
      </div>
    );
  }
}

export default App;
