#!/bin/bash

start() {
  export NODE_ENV=test
  npm install config @nullplatform/test-container @nullplatform/log
  node test/containers/commands --start
}

stop() {
  node test/containers/commands --stop
}

case "$1" in
  --start)
    start
    ;;
  --stop)
    stop
    ;;
  *)
    echo "Usage: $0 --start | --stop"
    exit 1
    ;;
esac
