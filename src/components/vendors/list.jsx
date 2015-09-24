import React from 'react'

const List = React.createClass({
  render() {
    return (<form><h3>List</h3>
      <div className="row">
        <div className="input-field col s6">
          <input defaultValue="Alvin" id="first_name2" type="text" className="validate" />
          <label className="active" htmlFor="first_name2">First Name</label>
        </div>
      </div>
    </form>)
  }
})

module.exports = List
