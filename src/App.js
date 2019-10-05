import React, { Component } from "react";

class App extends Component {
  state = {
    items: [],
    foods: [],
    value: "",
    valuef: "",
  };

  handleChange = event => {
    this.setState({ value: event.target.value});
  };
  
  handleCreateItem = event => {
    if(event.key === "Enter") {
      const newItem = {
        id: Math.floor(Math.random() * 1000000),
        title: this.state.value,
      };
      
      const newItems = this.state.items.slice();
      newItems.push(newItem);
      this.setState({ 
        items: newItems,
        value: ''})
      }
    };
    
    handleDeleteItem = itemIdToDelete => () => {
      const newItems = this.state.items.slice();
      const itemIndexToDelete = newItems.findIndex( items => {
        if(items.id === itemIdToDelete) {
          return true;
        }
        else {
          return false;
        }
      });
      newItems.splice(itemIndexToDelete, 1);
      
      this.setState({items: newItems});
    };
    //==========
    handleChangeFood = event => {
      this.setState({ valuef: event.target.value });
    }
  
    handleCreateFood = event => {
      if(event.key === "Enter"){
        const newFood = {
          id: Math.floor(Math.random() * 100000000),
          title: this.state.valuef,
        }
  
        const newFoods = this.state.foods.slice();
        newFoods.push(newFood)
        this.setState({
          foods: newFoods,
          valuef: ""})
      }
    }
    handleDeleteFood = foodId2Delete => () => {
      const newFoods = this.state.foods.slice();
      const foodIndex2Delete = newFoods.findIndex( foods => {
        if(foods.id === foodId2Delete){
          return true;
        }
        else {
          return false;
        }
      });
      newFoods.splice(foodIndex2Delete, 1);

      this.setState({ foods: newFoods})
    }
    //==================================================
    render() {
      return (
        <React.Fragment>
        <section>
          <header>
            <h1>Exercise Log</h1>
            <input
              placeholder="What did you exercise?"
              autoFocus
              value={this.state.value}
              onChange={this.handleChange}
              onKeyDown={this.handleCreateItem}
              />
          </header>

          <section>
            <ul>
              {this.state.items.map(item => (
                <div>
                  <input type="checkbox" />
                  - {item.title} - 
                  <button onClick={this.handleDeleteItem(item.id)} />
                </div>
              ))}
            </ul>
          </section>
          <footer>Left input is to check. Right input is to delete</footer>
        </section>
             
        <header>
          <h1>Meals</h1>
          <input 
          placeholder="What did you eat?"
          value={this.state.valuef}
          onChange={this.handleChangeFood}
          onKeyDown={this.handleCreateFood}
          />
        </header>

        <section>
          <ul>
          {this.state.foods.map( food => (
            <div>
              <input type="checkbox"/>
              - {food.title} -
              <button onClick={this.handleDeleteFood(food.id)} />
            </div>
          ))}
          </ul>
        </section>
        <footer>Table for food</footer>
      </React.Fragment>
    );
  };
}

export default App;

