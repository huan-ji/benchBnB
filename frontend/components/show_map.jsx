var React = require('react');
var BenchStore = require('../stores/bench');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var FilterActions = require('../actions/filter_actions');

var Map = React.createClass({
  mixins: [History],

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map),
        options = {
          center: { lat: this.props.bench.lat, lng: this.props.bench.lng },
          zoom: 13,
          draggable: false
        };

    this.map = new google.maps.Map(map, options);
    // BenchStore.addListener(this._onChange);
    // this.map.addListener("click", this.clickMapHandler);
    // this.listenForMove();
    // this.props.benchLocs.forEach(this.addBenchPlace);
    this.addBench(this.props.bench);
  },

  // _onChange: function () {
  //   var that = this;
  //   // debugger;
  //
  //   // console.log(this.state.markers);
  //   var benches = BenchStore.all();
  //   // console.log(benches);
  //   var removeMarkers = this.state.markers.filter(function (marker) {
  //     var ret = true;
  //     for (var i = 0; i < benches.length; i++) {
  //       if (marker.position.lat() === benches[i].lat || marker.position.lng === benches[i].lng){
  //         ret = false;
  //       }
  //     }
  //     return ret;
  //   });
  //
  //   // console.log(removeMarkers);
  //   removeMarkers.forEach(function (marker) {
  //     // debugger;
  //     var idx = that.state.markers.indexOf(marker);
  //     that.state.markers.splice(idx, 1);
  //     marker.setMap(null);
  //   });
  //
  //   var addMarkers = benches.filter(function (bench) {
  //     // debugger;
  //     var markers = that.state.markers;
  //     if (markers.length === 0) {
  //       return true;
  //     } else {
  //       var ret = true;
  //       for (var i = 0; i < markers.length; i++) {
  //         if (markers[i].position.lat() === bench.lat || markers[i].position.lng === bench.lng){
  //           return false;
  //         }
  //       }
  //       return ret;
  //     }
  //   });
  //
  //   // console.log(addMarkers);
  //
  //   // console.log(BenchStore.all());
  //   addMarkers.forEach(function (bench) {
  //     if (addMarkers.indexOf(bench) !== -1) {
  //       that.addBench(bench);
  //     }
  //   });
  // },

  addBench: function (bench) {
    // debugger;
    var pos = new google.maps.LatLng(bench.lat, bench.lng),
        marker = new google.maps.Marker({
          position: pos,
          map: this.map
        });
    marker.addListener('click', function () {
      alert("clicked on: " + bench.description);
    });
    // this.setState({ markers: this.state.markers.concat([marker])});
  },

  // listenForMove: function () {
  //   var that = this;
  //   google.maps.event.addListener(this.map, 'idle', function() {
  //     var bounds = that.map.getBounds();
  //     var mapBounds = {
  //       "northEast": { "lat": bounds.getNorthEast().lat, "lng": bounds.getNorthEast().lng },
  //       "southWest": { "lat": bounds.getSouthWest().lat, "lng": bounds.getSouthWest().lng }
  //     };
  //     // debugger;
  //     FilterActions.changeMap(mapBounds);
  //
  //   });
  // },

  // clickMapHandler: function (e) {
  //   var coords = {
  //     lat: e.latLng.lat(),
  //     lng: e.latLng.lng()
  //   };
  //   // this.history.push({pathname: "/benches/new", search: coords});
  //   this.history.pushState(null, "/benches/new", coords);
  // },

  render: function () {
    // debugger;
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
