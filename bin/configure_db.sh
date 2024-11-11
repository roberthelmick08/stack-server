#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring userstackdb"

dropdb -U node_user userstackdb
createdb -U node_user userstackdb

psql -U node_user userstackdb < ./bin/sql/generation.sql
psql -U node_user userstackdb < ./bin/sql/user.sql

echo "userstackdb was configured"
