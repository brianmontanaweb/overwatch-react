import React from 'react';
import PropTypes from 'prop-types';

class MostPlayed extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <h4 className="hl-primary">{this.props.name}</h4>
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