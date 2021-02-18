import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      routines: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://www.json-generator.com/api/json/get/cvrOahBiHm?indent=2')
      .then(response => response.json())
      .then(users => this.setState({ routines: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { routines, searchField } = this.state;
    const filteredToutines = routines.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>CopyLife</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList routines={filteredToutines} />
      </div>
    );
  }
}

export default App;
