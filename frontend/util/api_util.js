var ApiAction = require('../actions/api_actions.js');

var ApiUtil = {
  fetchBenches: function (filters) {
    // debugger;
    $.get("api/benches", { "bounds": filters }, function(benches) {
      // debugger;
      ApiAction.receiveAll(benches);
    });
  },

  createBench: function (bench) {
    $.post("api/benches", { bench: bench }, function (result) {
      ApiAction.receiveBench(result);
    });
  },

  fetchReviews: function (benchId) {
    // debugger;
    $.get("api/benches/" + benchId + "/reviews", {}, function(reviews) {
      ApiAction.receiveAllReviews(reviews);
    });
  },

  createReview: function (review) {
    $.post("api/reviews", { review: review }, function (result) {
      ApiAction.receiveReview(result);
    });
  }


};

module.exports = ApiUtil;
