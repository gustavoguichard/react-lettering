import React from 'react'
import Lettering from './lettering'

class App extends React.Component {
  render() {
    return (
      <Lettering className="fancyText" tagName="h1" charClass="custom">
        Awesome Title!\n Stylized!
      </Lettering>
    )
  }
}

module.exports = App