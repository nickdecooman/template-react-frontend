#! /bin/sh

if [ "$NODE_ENV" == "production" ]; then
  echo "Building in production mode"
  NODE_ENV=development yarn install
  yarn run build
  rm -rf node_modules src config __tests__ __mocks__ public package.json yarn.lock .babelrc .flowconfig .eslintrc .eslintignore
  rm -- "$0"
  yarn global add serve
else
  echo "Building in development mode"
  yarn install
fi
