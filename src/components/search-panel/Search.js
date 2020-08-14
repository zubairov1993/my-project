import React, {Component} from 'react';

import './Search.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tern: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(e) {
    const tern = e.target.value;
    this.setState({tern});
    this.props.onUpdateSearch(tern);
  }

  render() {
    return (
      <input 
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    )
  }

}