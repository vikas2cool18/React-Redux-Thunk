import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Home from './conponents/Home'
import { increment } from './actions/count'
import Button from './Button';
import Generate from './Generate';
import RandomNumbers from './RandomNumbers';
import ListUsers from './conponents/users/List'

import ArticleList from './conponents/articles/List'
import Assingments from './conponents/Assingments';
import UsertShow from './conponents/users/Show'

function App(props) {
  return (
    <BrowserRouter>
      <h1>Redux Playarea</h1>
      <div>
        <Link to="/"> HOME | </Link>
        <Link to="/users"> USERS | </Link>
        <Link to="/assignments"> ASSINGMENTS | </Link>

        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/users" component={ListUsers} exact={true}></Route>
        <Route path="/users/:id" component={UsertShow}></Route>
        <Route path="/assignments" component={Assingments} exact={true}></Route>

        {/* <h2>{props.count}</h2>

      <button onClick={() => {
        props.dispatch(increment())
      }} > <h2>+</h2></button>

      <Button />
      <hr></hr>
      <Generate />
      <hr></hr>
      <RandomNumbers />
      <hr></hr>
      <ArticleList /> */}

      </div>
    </BrowserRouter>

  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

// const wrappedComponent = connect()(App)
// export default wrappedComponent
export default connect(mapStateToProps)(App);
