import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.navItems.map(navItem => {
            return (
              <li>
                <a href={`#${navItem.path}`}>{navItem.name}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navigation;