react-lettering
=====================

React component to create customizable letterings.

### Usage

```
import Lettering from './lettering'

<Lettering baseClass="custom">
  <h2 className="your-custom-class">Awesome Title!</h2>
</Lettering>
```

You just need to pass a `baseClass` that will be used in the letters wrappers with incremental numbers at the end, for instance, in the case above, the generated code will be:

```
<h2 class="your-custom-class">
  <span class="custom custom-0">A</span>
  <span class="custom custom-1">w</span>
  <span class="custom custom-2">e</span>
  <span class="custom custom-3">s</span>
  <span class="custom custom-4">o</span>
  <span class="custom custom-5">m</span>
  <span class="custom custom-6">e</span>
  <span class="custom custom-7"></span>
  <span class="custom custom-8">T</span>
  <span class="custom custom-9">i</span>
  <span class="custom custom-10">t</span>
  <span class="custom custom-11">l</span>
  <span class="custom custom-12">e</span>
  <span class="custom custom-13">!</span>
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
