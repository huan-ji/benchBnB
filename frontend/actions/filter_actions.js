var AppDispatcher = require('../dispatcher/dispatcher');

var FilterActions = {
  changeMap: function (params) {
    AppDispatcher.dispatch({
      actionType: "CHANGE_MAP",
      params: params
    });
  },

  changeSeats: function (seats) {
    AppDispatcher.dispatch({
      actionType: "CHANGE_SEATS",
      seats: seats
    });
  }
};

module.exports = FilterActions;
