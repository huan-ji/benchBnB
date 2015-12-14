var React = require('react');
var ReviewStore = require('../stores/review');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      body: "",
      score: "",
      bench_id: this.props.bench.id
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var review = {
      body: this.state.body,
      score: this.state.score,
      bench_id: this.props.bench.id
    };
    ApiUtil.createReview(review);
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        Body:<input input="text" valueLink={this.linkState('body')}/>
        <br/>
        Score:<input input="text" valueLink={this.linkState('score')}/>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = ReviewForm;
