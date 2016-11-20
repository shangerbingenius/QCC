#!/bin/bash
basepath=$(cd `dirname $0`; pwd)
sbinpath="${basepath}/../module/mongodb/mongod"
confpath="${basepath}/../etc/mongodb.conf"

$sbinpath --config $confpath