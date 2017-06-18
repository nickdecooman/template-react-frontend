# template-react-frontend
Template project for a modern React-based frontend app 💃

<img src="https://cdn.pbrd.co/images/6GJxp7tQ.gif" width="450">

## Features

* Docker driven
* Build and run development image with auto-restart
* Build and run stripped production image
* Uses Webpack, Babel, ESLint, Flow and Prettier
* Folder structure based on components, layouts and pages
* Fully CSS-in-JS driven using [Aphrodite](https://github.com/Khan/aphrodite), or [CSS modules](https://github.com/css-modules/css-modules) if needed
* React-Router with two example pages
* Jest for unit testing

## Install

```
git clone git@github.com:nickdecooman/template-react-frontend.git
cd template-react-frontend
chmod -R u+x ./setup
```

## Usage

### Development

```
yarn build-dev
yarn up-dev
```

### Production

```
yarn build-prod
yarn up-prod
```

### Testing

While running in development modus, you can run `yarn test` to start Jest in watch mode.

### Clean

`yarn clean` will propely stop and remove all containers created within the scope of this project.


## Backend?

Looking for a backend template too? Check out [template-node-backend](https://github.com/nickdecooman/template-node-backend).

## References

* [React @ Product Hunt](https://speakerdeck.com/rstankov/react-at-product-hunt-wad)
* [Inline CSS at Khan Academy](http://engineering.khanacademy.org/posts/aphrodite-inline-css.htm)
* [Journey to Enjoyable, Maintainable Styling with React, ITCSS, and CSS-in-JS](https://medium.com/maintainable-react-apps/journey-to-enjoyable-maintainable-styling-with-react-itcss-and-css-in-js-632cfa9c70d6)
