var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _reviews = [];
var ReviewStore = new Store(AppDispatcher);

var resetReviews = function(reviews) {
  _reviews = {};
  reviews.forEach(function (review) {
    _reviews[review.id] = review;
  });
  ReviewStore.__emitChange();
};

var removeReviews = function () {
  _reviews = [];
  ReviewStore.__emitChange();
};

var receiveReview = function (review) {
  _reviews[review.id] = review;
  ReviewStore.__emitChange();
};

ReviewStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "REVIEWS_RECEIVED":
      resetReviews(payload.reviews);
      break;
    case "REMOVE_REVIEW":
      removeReviews();
      break;
    case "REVIEW_RECEIVED":
      receiveReview(payload.review);
      break;
  }
  // debugger;
};

ReviewStore.all = function () {
  var returnReviews = [];
  for (var id in _reviews) {
    if (_reviews.hasOwnProperty(id)) {
      returnReviews.push(_reviews[id]);
    }
  }
  return returnReviews;
};

ReviewStore.find = function (id) {
  return _reviews[id];
};

module.exports = ReviewStore;
