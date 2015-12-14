var React = require('react');
var ReviewStore = require('../stores/review');
var ApiUtil = require('../util/api_util');

var Reviews = React.createClass({
  getInitialState: function () {
    return {
      reviews: null
    };
  },

  componentDidMount: function () {
    ReviewStore.addListener(this._onChange);
    ApiUtil.fetchReviews(this.props.bench.id);
  },

  _onChange: function () {
    this.setState({ reviews: ReviewStore.all() });
  },

  render: function () {
    var reviews = "";
    if (this.state.reviews !== null) {
      reviews = this.state.reviews.map(function (review, i) {
        return <li key={i}>{review.body}<br/>{review.score}</li>;
      });
    }
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
});

module.exports = Reviews;
