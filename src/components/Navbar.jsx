import React, { Component } from 'react';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className='navbar navbar-light bg-dark'>
        <span className='navbar-brand text-white mb-0 h1'>React Counter</span>
      </nav>
    );
  }
}

export default Navbar;
