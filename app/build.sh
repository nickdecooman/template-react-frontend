#! /bin/sh

if [ "$NODE_ENV" == "production" ]; then
  echo "Building in production mode"
  NODE_ENV=development yarn install
  ./node_modules/.bin/react-scripts build
  rm -rf node_modules src public package.json yarn.lock .babelrc .flowconfig
  rm -- "$0"
  yarn global add serve
else
  echo "Building in development mode"
  yarn install
fi
