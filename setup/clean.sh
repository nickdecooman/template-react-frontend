#! /bin/sh

. .env.system

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
docker-compose -p ${NAME} -f ${DIR}/dc.dev.yml stop
docker-compose -p ${NAME} -f ${DIR}/dc.prod.yml stop

CONTAINERS=$(docker ps -a -q --filter "name=${NAME}")
if [ "$CONTAINERS" ]; then
  docker rm -f $CONTAINERS
fi
