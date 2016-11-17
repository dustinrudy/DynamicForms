import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav>
        <div className="header">Sign Up For My Web App</div>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});