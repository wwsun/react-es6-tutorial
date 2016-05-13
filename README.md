# react-es6-tutorial [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

A React tutorial with ES6 syntax. The tutorial address:

- [Part I: Setup the environment](http://wwsun.github.io/posts/react-with-es6-part-1.html)
- [Part II: Props and State](http://wwsun.github.io/posts/react-with-es6-part-2.html)
- [Part III: Function bind](http://wwsun.github.io/posts/react-with-es6-part-3.html)
- [Part IV: HOC and Mixin](http://wwsun.github.io/posts/react-with-es6-part-4.html)

## Dependencies

- Node 4.x(LTS)
- React 15.x

## Running

1. Run `npm start` to start the [seu](https://github.com/wwsun/seu) service
2. Open the browser to visit `http://localhost:3000/demo` to check the results

## Structure

```bash
- demo              // display your app
- src
    - components    // your app components
    - index.jsx     // your app root
- index.jsx         // your app export entry
```

## Docs

1. Compile entry:

   Setup the webpack compile entry by `entry.index` in the `package.json`.

2. [SEU](https://github.com/wwsun/seu) is a light weight tool set to help you create, build, watch, lint your React components.

    Using `seu`, you can write `es6`, `stage-0`, `scss` by default, you also can create your own `webpack` configs.

## Read more about React.js:

- Data processing:
    - [The evolution of Flux frameworks](https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31#.90lamiv5l)
    - Getting to know [Redux](https://github.com/rackt/redux) | [Video](https://egghead.io/series/getting-started-with-redux)
    - Keeping your state flat: [normalizr](https://github.com/gaearon/normalizr)
    - Trying [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) to communicate with APIs
- Immutable state:
    - [Immutable objects](https://en.wikipedia.org/wiki/Immutable_object)
    - Trying [immutable.js](https://facebook.github.io/immutable-js/)
    - Reding Lee Byron's [Immutable data and react](https://www.youtube.com/watch?v=I7IdS-PbEgI)
- Router:
    - Trying [react-router](https://github.com/rackt/react-router)
    - In redux, you can use [redux-simple-router](https://github.com/rackt/redux-simple-router)
    - Code splitting, lazy loading: using webpack
    - Getting to know: [HTTP/2 multiplexed](https://http2.github.io/faq/#why-is-http2-multiplexed)
    - Combining with [chunk hashing](https://christianalfoni.github.io/react-webpack-cookbook/Optimizing-caching.html) you can also optimize your cache hit ratio after code changes.
    - Reading Ryan Florence's [Welcome to Future of Web Application Delivery](https://medium.com/@ryanflorence/welcome-to-future-of-web-application-delivery-9750b7564d9f#.vuf3e1nqi)
- Components:
    - Using JSX: [JSX looks like an abomination - but it's good for you](https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918#.ca28nvee6)
    - Using ES6 Class, extends `React.Component`
    - Using [High Order Components](http://jamesknelson.com/structuring-react-applications-higher-order-components/) to replace mixins
    - [Mixin is dead](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)
    - Checking `propTypes`
- Tests
    - Component testing: trying AirBnB's [enzyme](https://github.com/airbnb/enzyme)
    - Assertion library: [chai-enyzime](https://github.com/producthunt/chai-enzyme)
    - Redux testing: async actions testing [redux-mock-store](https://www.npmjs.com/package/redux-mock-store)
    - [Redux testing in depth](http://rackt.org/redux/docs/recipes/WritingTests.html)
- Bundle
    - Reading: [Reduce your bundle.js file size by doing this one thing](https://lacke.mn/reduce-your-bundle-js-file-size/)
    - Getting to know more about [Webpack](https://christianalfoni.github.io/react-webpack-cookbook)
    - Component-level hot reload: [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)
- Linters
    - Force linters: [pre-push](https://www.npmjs.com/package/pre-push) or [pre-commit](https://www.npmjs.com/package/pre-commit)
    - Javascript Standard Style with [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [The Elm Architecutre](https://github.com/evancz/elm-architecture-tutorial/)

## References:

1. [React.js Best Practices for 2016](https://blog.risingstack.com/react-js-best-practices-for-2016/) 
| [CN](http://insights.thoughtworkers.org/react-js-best-practices-for-2016/)


[npm-image]: https://badge.fury.io/js/react-es6-tutorial.svg
[npm-url]: https://npmjs.org/package/react-es6-tutorial
[daviddm-image]: https://david-dm.org/wwsun/react-es6-tutorial.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wwsun/react-res6-tutorial