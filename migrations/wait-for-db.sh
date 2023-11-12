#!/bin/bash

# Wait for the database to be ready
while ! pg_isready -h $DB_HOST -p 5432 -U postgres
do
  echo "Waiting for database connection..."
  # wait for 5 seconds before checking again
  sleep 5
done

echo "Database is ready. Proceeding with migrations."
