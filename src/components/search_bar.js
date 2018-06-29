import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className="field">
      <p className="control has-icons-left">
        <input className="input" placeholder="Buscar..." onChange={this.onInputChange} />
        <span className="icon is-small is-left">
          <i className="fa fa-search"></i>
        </span>
      </p>
      <p> Lo que escribiste es: { this.state.query }</p>
    </div>
    )
  }

  onInputChange(event){
    this.setState({query: event.target.value});
  }
}

export default SearchBar;