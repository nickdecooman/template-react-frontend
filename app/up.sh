#! /bin/sh

if [ "$NODE_ENV" == "production" ]; then
  echo "Running in production mode on port $PORT"
  serve -s --port $PORT build
else
  echo "Running in development mode"
  yarn run start
fi
