import React from 'react'

var AppRoot = React.createClass({
  render: function() {
    return (
      <div>
        <div>App Title</div>
        <div>{this.props.children}</div>
        <div>App Footer</div>
      </div>
    )
  }
})

module.exports = AppRoot
