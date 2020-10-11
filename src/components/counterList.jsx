import React, { Component } from 'react';
import Counter from './counter';

class CounterList extends Component {
  state = {
    counters: [],
  };

  incrementEvent = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = counters[index].value + counters[index].incr;
    this.setState({ counters });
  };

  decrementEvent = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = counters[index].value - counters[index].incr;
    this.setState({ counters });
  };

  deleteEvent = (id) => {
    const counters = this.state.counters
      .filter((c) => c.id !== id)
      .map((c) => {
        c.id--;
        return c;
      });
    this.setState({ counters });
  };

  resetEvent = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  addCounter = () => {
    const counters = [...this.state.counters];

    let lastId;
    if (counters[this.state.counters.length - 1] === undefined) {
      lastId = 1;
    } else {
      lastId = counters[this.state.counters.length - 1].id + 1;
    }

    counters.push({
      id: lastId,
      value: 0,
      incr: 1,
    });
    this.setState({ counters });
  };

  render() {
    let sum = Number;
    return (
      <div>
        <div className='top-btns d-flex mt-1'>
          <button className='btn btn-info m-2 ' onClick={this.addCounter}>
            Add
          </button>
          <button className='btn btn-info m-2 ' onClick={this.resetEvent}>
            Reset
          </button>
          <button
            className='btn btn-danger m-2 '
            onClick={() => this.setState({ counters: [] })}
          >
            Delete All
          </button>
        </div>
        {this.state.counters.map((component) => (
          <Counter
            key={component.id}
            onDelete={this.deleteEvent}
            counter={component}
            title={`Counter #${component.id}`}
            incrementEvent={this.incrementEvent}
            decrementEvent={this.decrementEvent}
          ></Counter>
        ))}

        <h1 className='mt-3'>
          Total:{' '}
          {this.state.counters
            .map((c) => {
              return c.value;
            })
            .reduce((a, b) => a + b, 0)}
        </h1>
      </div>
    );
  }
}

export default CounterList;
