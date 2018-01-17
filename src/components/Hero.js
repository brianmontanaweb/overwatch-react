import React from 'react';
import PropTypes from 'prop-types';

class MostPlayed extends React.Component {
  render() {
    return (
      <div className="card-container" style={{backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/media/screenshot/zenyatta-screenshot-008.jpg)`}}>
        <h4 className="hl-primary">{this.props.name}</h4>
        {/*Replace image url with reference to hero image*/}
        <img className="card-image" src="https://d1u1mce87gyfbn.cloudfront.net/media/screenshot/zenyatta-screenshot-008.jpg" alt=""/>
        <h6 className="hl-secondary">{this.props.age}</h6>
        <p className="body-primary">{this.props.description}</p>
        <p className="body-primary"><small>{this.props.base}</small></p>
      </div>
    )
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    description: PropTypes.string.isRequired,
    base: PropTypes.string
  }
}

export default MostPlayed;