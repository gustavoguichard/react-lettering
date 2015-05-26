import React from 'react'
import Lettering from './lettering'

const App = React.createClass({
  render() {
    return (
      <Lettering baseClass="custom">
        <h2>Awesome Title!</h2>
      </Lettering>
    )
  }
})

module.exports = App