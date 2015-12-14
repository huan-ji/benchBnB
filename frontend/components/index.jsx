var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');
var FilterStore = require('../stores/filter');

var Index = React.createClass({
  getInitialState: function () {
    return {
      benches: BenchStore.all(),
      params: FilterStore.all()
    };
  },

  componentDidMount: function () {
    BenchStore.addListener(this._onBenchChange);
    FilterStore.addListener(this._onFilterChange);
    // debugger;
  },

  _onBenchChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  _onFilterChange: function () {
    this.setState({ params: FilterStore.all() });
    // debugger;
    ApiUtil.fetchBenches(this.state.params);
  },

  render: function () {
    // debugger;
    var benches = this.state.benches.map(function (bench) {
      return <li>Description: {bench.description}<br/>Average Score: {bench.average_score}</li>;
    });
    return (
      <ul>
        {benches}
      </ul>
    );
  }
});

module.exports = Index;
