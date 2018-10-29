import React, { Component } from 'react';

class TableOfStats extends Component {
  componentDidMount() {
    const { getStats } = this.props;
    getStats();
  }
  render() {
    return <div>Hello world!!!</div>;
  }
}

export default TableOfStats;
