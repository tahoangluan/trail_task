#!/bin/bash
usage()
{
    echo "usage: startup [[-f docker-compose-file] [-t timer in seconds]]"
}

t=10
f=docker-compose.yml
while [ "$1" != "" ]; do
    case $1 in
        -f | --file )           shift
                                f=$1
                                ;;
        -t | --timer)           shift
                                t=$1
                                ;;
        -h | --help )           usage
                                exit
                                ;;
        * )                     usage
                                exit 1
    esac
    shift
done
docker-compose -f $f up -d trail-task
echo "Frontend is initializing."