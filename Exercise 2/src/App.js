import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  addCarrots = () => {
    this.setState({ items: [...this.state.items, {id: 5, value: "Carrots", qty: 3}]});
  }
  addStrawberries = () => {
    this.setState({ items: [...this.state.items, {id: 6, value: "Strawberries", qty: 12}]});
  }
  addYogurt = () => {
    this.setState({ items: [...this.state.items, {id: 7, value: "Yogurt", qty: 2}]});
  }
  addBeer = () => {
    this.setState({ items: [...this.state.items, {id: 8, value: "Beer", qty: 8}]});
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addCarrots }>Add Carrots</button>
      <button onClick={ this.addStrawberries }>Add Strawberries</button>
      <button onClick={ this.addYogurt }>Add Yogurt</button>
      <button onClick={ this.addBeer }>Add Beer</button>
    </div>
  }
}

export default App;