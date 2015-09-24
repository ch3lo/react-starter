import React from 'react'
import { TextField } from 'material-ui'
let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))()

const Register = React.createClass({
  render() {
    return (<form><h3>Register</h3>
      <div className="row">
        <div className="input-field col s6">
          <input defaultValue="Alvin" id="first_name2" type="text" className="validate" />
          <label className="active" htmlFor="first_name2">First Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input defaultValue="Alvin" id="first_name2" type="text" className="validate" />
          <label className="active" htmlFor="first_name2">First Name</label>
        </div>
      </div>
        <div className="row">
          <div className="input-field col s6">
            <input defaultValue="Alvin" id="first_name2" type="text" className="validate" />
            <label className="active" htmlFor="first_name2">First Name</label>
          </div>
        </div>
    </form>)
  }
})

module.exports = Register
