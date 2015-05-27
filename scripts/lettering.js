import React from 'react'

const tagNames = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']

const Lettering = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    charClass: React.PropTypes.string,
    children: React.PropTypes.string.isRequired,
    lineClass: React.PropTypes.string,
    tagName: React.PropTypes.oneOf(tagNames),
    wordClass: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      className: 'lettering',
      charClass: 'char',
      lineClass: 'line',
      tagName: 'h1',
      wordClass: 'word'
    }
  },
  getSpanElement(elem, className, index, spacer) {
    const key = `${className}-${index}`
    return <span key={key} className={`${className} ${key}`}>{elem}{spacer}</span>
  },
  getWrappedChars() {
    const { children, lineClass, wordClass, charClass } = this.props
    const childrenArr = children.split('\\n')
    const lines = childrenArr.map((line, lineIndex) => {
      const wordsArray = line.split(' ')
      const words = wordsArray.map((word, wordIndex) => {
        const charsArray = word.split('')
        const chars = charsArray.map((char, charIndex) => {
          return this.getSpanElement(char, charClass, charIndex)
        })
        return this.getSpanElement(chars, wordClass, wordIndex, ' ')
      })
      return this.getSpanElement(words, lineClass, lineIndex, ' ')
    })
    return lines
  },
  render() {
    const wrappedChars = this.getWrappedChars()
    return (
      React.DOM[this.props.tagName]({className: this.props.className}, wrappedChars)
    )
  }
})

module.exports = Lettering