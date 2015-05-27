import React from 'react'
import Lettering from './lettering'

const App = React.createClass({
  render() {
    return (
      <Lettering className="fancyText" tagName="h1" charClass="custom">
        Awesome Title!\n Here we go!
      </Lettering>
    )
  }
})

module.exports = App