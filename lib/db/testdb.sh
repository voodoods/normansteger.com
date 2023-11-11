#!/bin/bash
if [ "$1" == "up" ]; then
  docker-compose -f ./lib/db/docker-compose.yml up -d 
  if [ $? -ne 0 ]; then
    echo "Failed to start postgres test database."
    exit 1
  else
    echo "Starting postgres test database..."
    exit 0
  fi
elif [ "$1" == "down" ]; then
  docker-compose -f ./lib/db/docker-compose.yml down
    if [ $? -ne 0 ]; then
    echo "Failed to start postgres test database."
    exit 1
  else
    echo "Stopping postgres test database..."
    exit 0
  fi
fi
