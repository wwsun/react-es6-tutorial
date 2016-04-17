# react-es6-tutorial

A React tutorial with ES6 syntax. The tutorial address:

- [Part I: Setup the environment](http://wwsun.github.io/posts/react-with-es6-part-1.html)
- [Part II: Props and State](http://wwsun.github.io/posts/react-with-es6-part-2.html)
- [Part III: Function bind](http://wwsun.github.io/posts/react-with-es6-part-3.html)
- [Part IV: HOC and Mixin](http://wwsun.github.io/posts/react-with-es6-part-4.html)


## Dependencies

- Node 4.x(LTS)
- React 15.x

## Running

1. Run `npm start` to start the [dora](https://github.com/dora-js/dora) service
2. Open the browser to visit `http://localhost:3000/demo` to check the results

## Structure

```bash
- demo              // display your app
- src
    - components    // your app components
    - index.jsx     // your app root
- webpack.config.js // config your webpack
- index.jsx         // your app export entry
```

## Docs

1. Webpack entry:

   Setup the webpack compile entry by `entry.index` in the `package.json`.

2. Webpack config:

   Setup the webpack compile options in the `webpack.config.js` under the project root.