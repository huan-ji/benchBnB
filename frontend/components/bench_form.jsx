var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: "",
      seating: "",
      image_url: ""
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var bench = {
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description,
      image_url: this.state.image_url,
      seating: this.state.seating
    };
    ApiUtil.createBench(bench);
  },

  cloudinary: function () {
    var that = this;
    cloudinary.openUploadWidget({ cloud_name: 'dzqfe9334', upload_preset: 'l2x1i1m2'},
      function(error, result) {
        // console.log(result);
        that.setState({ image_url: result[0].thumbnail_url });
      });
  },

  render: function () {
    return (
      <form>
        Latitude:<input input="text" valueLink={this.linkState('lat')}/>
        <br/>
        Longitude:<input input="text" valueLink={this.linkState('lng')}/>
        <br/>
        Description:<input input="text" valueLink={this.linkState('description')}/>
        <br/>
        Seating:<input input="text" valueLink={this.linkState('seating')}/>
        <br/>
        <button onClick={this.cloudinary}>Upload Image</button>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
});

module.exports = BenchForm;
