import React from 'react'

var AppRoot = React.createClass({
  render: function() {
    return (<div>
        <div>{this.props.children}</div>
        </div>)
  }
})

module.exports = AppRoot
