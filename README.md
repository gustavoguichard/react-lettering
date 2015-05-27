react-lettering
=====================

React component to create customizable letterings.

### Usage

```
import Lettering from './lettering'

<Lettering className="fancyText" tagName="h1" charClass="custom">
  Awesome Title!
</Lettering>
```

You just need to pass a `className` that will be used in the wrapper and you can also pass custom classes for chars, words and lines. For instance, in the case above, the generated code will be:

```
<h1 class="fancyText">
  <span class="word word-0">
    <span class="custom custom-0">A</span>
    <span class="custom custom-1">w</span>
    <span class="custom custom-2">e</span>
    <span class="custom custom-3">s</span>
    <span class="custom custom-4">o</span>
    <span class="custom custom-5">m</span>
    <span class="custom custom-6">e</span>
    <span class="custom custom-7"></span>
  </span>
  <span class="word word-1">
    <span class="custom custom-8">T</span>
    <span class="custom custom-9">i</span>
    <span class="custom custom-10">t</span>
    <span class="custom custom-11">l</span>
    <span class="custom custom-12">e</span>
    <span class="custom custom-13">!</span>
  </span>
</h2>
```

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Inspiration & Base

* [Lettering.js](http://letteringjs.com/)
