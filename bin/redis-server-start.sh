#!/bin/bash
basepath=$(cd `dirname $0`; pwd)
sbinpath="${basepath}/../module/redis/redis-server"
confpath="${basepath}/../etc/redis.conf"

$sbinpath --config $confpath