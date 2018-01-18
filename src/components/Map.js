import React from 'react';
import PropTypes from 'prop-types';

class Map extends React.Component {
  render() {
    return (
      <div className="card-container" style={{backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/media/screenshot/hollywood-screenshot-002.jpg)`}}>
        <div className="bg-overlay">
          <h4 className="hl-primary">{this.props.name}</h4>
          <h6 className="hl-secondary">{this.props.location}</h6>
          {/*Replace image url with reference to hero image*/}
          <img className="card-image" src="https://d1u1mce87gyfbn.cloudfront.net/media/screenshot/hollywood-screenshot-002.jpg" alt=""/>
        </div>
      </div>
    )
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }
}

export default Map;