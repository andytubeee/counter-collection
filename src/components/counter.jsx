import React, { Component } from 'react';

class Counter extends Component {
  componentDidMount() {
    document.title = 'React Counter';
  }

  renderTags() {
    if (this.state.tags.length === 0) return <h3>No tags found</h3>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let badgeClasses = 'badge mt-3 m-2 mr-4 badge-';
    badgeClasses += this.props.counter.value === 0 ? 'warning' : 'primary';
    return badgeClasses;
  }

  render() {
    return (
      <div>
        <h4> {this.props.title} </h4>
        <span
          className={this.getBadgeClasses()}
          style={{ width: 50, maxWidth: 50 }}
        >
          {this.formatCount()}
        </span>
        <button
          className='btn btn-success'
          onClick={() => {
            this.props.incrementEvent(this.props.counter);
          }}
        >
          +
        </button>
        <button
          className='btn btn-info ml-2'
          onClick={() => this.props.decrementEvent(this.props.counter)}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger ml-2'
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
