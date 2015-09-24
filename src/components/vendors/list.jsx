import React from 'react'
import { TextField } from 'material-ui'
let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))()

const List = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render() {
    return (<form><h3>List</h3>
    <TextField hintText="Hint Text" floatingLabelText="My awsome company name" /><br />
    <TextField hintText="Password Field" floatingLabelText="Use a strong pass" type="password" /><br />
    </form>)
  }
})

module.exports = List
