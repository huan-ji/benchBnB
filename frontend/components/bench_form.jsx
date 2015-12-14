var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: ""
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var bench = {
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description
    };
    ApiUtil.createBench(bench);
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        Latitude:<input input="text" valueLink={this.linkState('lat')}/>
        <br/>
        Longitude:<input input="text" valueLink={this.linkState('lng')}/>
        <br/>
        Description:<input input="text" valueLink={this.linkState('description')}/>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = BenchForm;
