#! /bin/sh

export ENV=${1:-prod}

. .env.system

printf "\nRunning version ${VERSION} in ${ENV} mode on port ${PORT} \n\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
docker-compose -p ${NAME} -f ${DIR}/dc.$ENV.yml up
