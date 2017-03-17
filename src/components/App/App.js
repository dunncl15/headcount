import React, { Component } from 'react';
import Main                 from '../Main/Main';
import Search               from '../Search/Search';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchQuery: ''
    }
  }

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value
    });
  }

  render() {
    return (
      <section>
        <header>
          <h1 className="app-title">Welcome To Headcount 2.0</h1>
          <Search
            onChange={ this.handleChange.bind(this) } />
        </header>
        <Main
          query={ this.state.searchQuery }
          />
      </section>
    );
  }
}

export default App;
