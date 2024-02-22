#!/bin/bash

# Log file path
LOG_FILE="/tmp/import.log"

# Function to log messages
log() {
  echo "$(date +"%Y-%m-%d %H:%M:%S") $1" 
}

# Fetching the SQL file
log "Fetching WCA_export.sql..."
wget -q -O /tmp/WCA_export.sql.zip https://www.worldcubeassociation.org/export/results/WCA_export.sql

# Unzipping the SQL file
log "Unzipping WCA_export.sql.gz..."
unzip -q /tmp/WCA_export.sql.zip -d /tmp/WCA_export

# Importing the SQL file into MySQL
log "Importing WCA_export.sql into MySQL..."

if mysql -h 172.18.0.1 -p wca --password=password1 < /tmp/WCA_export/WCA_export.sql; then
  log "Import successful"
else
  log "Import failed"
fi
