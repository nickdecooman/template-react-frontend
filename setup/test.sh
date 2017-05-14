#! /bin/sh

. .env.system

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
docker-compose -p ${NAME} -f ${DIR}/dc.dev.yml exec node yarn test
