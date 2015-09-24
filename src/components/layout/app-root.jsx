import React from 'react'
import { Responsive as ResponsiveReactGridLayout } from 'react-grid-layout'
import { AppBar } from 'material-ui'
let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();

var AppRoot = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getLayout: function() {
    return {
      lg: [
        { x: 0, y: 0, w: 12, h: 3, i: 'home_heading' },
        { x: 0, y: 3, w: 12, h: 10, i: 'home_main' },
        { x: 0, y: 20, w: 12, h: 3, i: 'home_footer' }
      ],
      md: [
        { x: 0, y: 0, w: 10, h: 3, i: 'home_heading' },
        { x: 0, y: 3, w: 10, h: 10, i: 'home_main' },
        { x: 0, y: 20, w: 10, h: 3, i: 'home_footer' }
      ],
      sm: [
        { x: 0, y: 0, w: 6, h: 3, i: 'home_heading' },
        { x: 0, y: 10, w: 6, h: 10, i: 'home_main' },
        { x: 0, y: 20, w: 6, h: 3, i: 'home_footer' }
      ],
      xs: [
        { x: 0, y: 0, w: 4, h: 3, i: 'home_heading' },
        { x: 0, y: 3, w: 4, h: 10, i: 'home_main' },
        { x: 0, y: 20, w: 4, h: 3, i: 'home_footer' }
      ],
      xxs: [
        { x: 0, y: 0, w: 2, h: 3, i: 'home_heading' },
        { x: 0, y: 3, w: 2, h: 10, i: 'home_main' },
        { x: 0, y: 20, w: 2, h: 3, i: 'home_footer' }
      ]
    }
  },

  devLayoutDebug: function(layout) {
    console.log(layout);
  },

  render: function() {
    return (
      <ResponsiveReactGridLayout static="false" className="layout" isDraggable={false} layouts={ this.getLayout() }
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={ 40 }
        margin={ [0,0] }
        onLayoutChange={ this.devLayoutDebug }>
        <div key={ 'home_heading' }><AppBar title="App Title" /></div>
        <div key={ 'home_main' }>{this.props.children}</div>
        <div key={ 'home_footer' }><AppBar title="App Footer" /></div>
      </ResponsiveReactGridLayout>
    )
  }
})

module.exports = AppRoot
