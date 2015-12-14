var BenchConstants = require('../constants/bench_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  },

  receiveAllReviews: function (reviews) {
    AppDispatcher.dispatch({
      actionType: "REVIEWS_RECEIVED",
      reviews: reviews
    });
  },

  receiveReview: function (review) {
    AppDispatcher.dispatch({
      actionType: "REVIEW_RECEIVED",
      review: review
    });
  },

  removeAll: function () {
    AppDispatcher.dispatch({
      actionType: BenchConstants.REMOVE_BENCHES
    });
  }
};

module.exports = ApiActions;
