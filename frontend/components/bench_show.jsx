var React = require('react');
var BenchStore = require('../stores/bench');
var ShowMap = require('./show_map');
var Reviews = require('./reviews');
var ReviewForm = require('./review_form');

var BenchShow = React.createClass({
  getInitialState: function () {
    return {
      bench: BenchStore.find(parseInt(this.props.params.benchId))
    };
  },

  render: function () {
    return (
      <div>
        <ShowMap bench={this.state.bench}/>
        Lat:{this.state.bench.lat}
        <br/>
        Lng:{this.state.bench.lng}
        <br/>
        Description:{this.state.bench.description}
        <br/>
        Seating:{this.state.bench.seating}
        <Reviews bench={this.state.bench}/>
        <div>
          <ReviewForm bench={this.state.bench}/>
        </div>
      </div>
    );
  }
});

module.exports = BenchShow;
