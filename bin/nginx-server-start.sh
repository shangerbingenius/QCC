#!/bin/bash
basepath=$(cd `dirname $0`; pwd)
sbinpath="${basepath}/../module/nginx/nginx"
confpath="${basepath}/../etc/nginx/nginx.conf"
$sbinpath --config $confpath