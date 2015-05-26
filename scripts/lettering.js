import React from 'react'

const Lettering = React.createClass({
  propTypes: {
    baseClass: React.PropTypes.string.isRequired,
    baseStyles: React.PropTypes.object
  },
  getDefaultProps() {
    return { baseClass: 'char' }
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Lettering