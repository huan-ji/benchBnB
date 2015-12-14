var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _filter = {"minSeats": 0, "maxSeats": 20};
var FilterStore = new Store(AppDispatcher);

var changeMap = function (params) {
  _filter["northEast"] = params["northEast"];
  _filter["southWest"] = params["southWest"];
  FilterStore.__emitChange();
};

var changeSeats = function (seats) {
  // debugger;
  _filter["minSeats"] = seats.minSeats;
  _filter["maxSeats"] = seats.maxSeats;
  FilterStore.__emitChange();
};

FilterStore.all = function () {
  return _filter;
};

FilterStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "CHANGE_MAP":
      changeMap(payload.params);
      break;
    case "CHANGE_SEATS":
      changeSeats(payload.seats);
      break;
  }
};

module.exports = FilterStore;
