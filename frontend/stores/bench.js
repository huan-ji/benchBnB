var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _benches = [];
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants');

var resetBenches = function(benches) {
  _benches = {};
  benches.forEach(function (bench) {
    _benches[bench.id] = bench;
  });
  // debugger;
  BenchStore.__emitChange();
};

var removeBenches = function () {
  _benches = [];
  BenchStore.__emitChange();
};

var receiveBench = function (bench) {
  _benches[bench.id] = bench;
  BenchStore.__emitChange();
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      // debugger;
      resetBenches(payload.benches);
      break;
    case BenchConstants.REMOVE_BENCHES:
      removeBenches();
      break;
    case BenchConstants.BENCH_RECEIVED:
      receiveBench(payload.bench);
      break;
  }
  // debugger;
};

BenchStore.all = function () {
  var returnBenches = [];
  for (var id in _benches) {
    if (_benches.hasOwnProperty(id)) {
      returnBenches.push(_benches[id]);
    }
  }
  return returnBenches;
};

BenchStore.find = function (id) {
  return _benches[id];
};

module.exports = BenchStore;
