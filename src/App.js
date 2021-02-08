import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { setPizzas } from './redux/action/pizzas';


function App(props) {

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      props.setPizzas(data.pizzas)
    });
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={() => <Home items={props.items} />} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = {
  setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
