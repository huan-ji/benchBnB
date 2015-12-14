var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FilterActions = require('../actions/filter_actions');

var FilterParams = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      minSeats: 0,
      maxSeats: 20
    };
  },

  handleMinChange: function (e) {
    this.setState({ minSeats: e.target.value });
    var seats = {
      minSeats: parseInt(e.target.value),
      maxSeats: this.state.maxSeats
    };

    FilterActions.changeSeats(seats);
  },

  handleMaxChange: function (e) {
    this.setState({ maxSeats: e.target.value });
    var seats = {
      minSeats: this.state.minSeats,
      maxSeats: parseInt(e.target.value)
    };
    // debugger;
    FilterActions.changeSeats(seats);
  },

  render: function () {
    return (
      <form>
        Minimum Seats:<input input="text" onChange={this.handleMinChange} value={this.state.minSeats}/>
        <br/>
        Maximum Seats:<input input="text" onChange={this.handleMaxChange} value={this.state.maxSeats}/>
        <br/>
      </form>
    );
  },

});

module.exports = FilterParams;
