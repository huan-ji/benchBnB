var React = require('react');
var Map = require('./map');
var Index = require('./index');
var FilterParams = require('./filter_params');

var Search = React.createClass({
  render: function () {
    return (
      <div>
        <Map/>
        <FilterParams/>
        <Index/>
      </div>
    );
  }
});

module.exports = Search;
