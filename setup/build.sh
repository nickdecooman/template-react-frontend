#! /bin/sh

export ENV=${1:-prod}

. .env.system

printf "\nBuilding version ${VERSION} in ${ENV} mode \n\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
docker-compose -f $DIR/dc.$ENV.yml build
