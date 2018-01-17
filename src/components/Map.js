import React from 'react';
import PropTypes from 'prop-types';

class Map extends React.Component {
  render() {
    return (
      <div className="map-container">
        <h4 className="hl-primary">{this.props.name}</h4>
        <h6 className="hl-secondary">{this.props.location}</h6>
      </div>
    )
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }
}

export default Map;