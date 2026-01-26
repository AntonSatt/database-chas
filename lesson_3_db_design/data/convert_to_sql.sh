#!/bin/bash

OUTPUT="anton_database.sql"

# Setup the Database and Tables (3NF Design)
cat <<EOF > $OUTPUT
-- Anton's Security Database
-- Normalized to 3NF to avoid insertion, update, and deletion anomalies.

DROP TABLE IF EXISTS LoginAttempts;
DROP TABLE IF EXISTS SourceIPs;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    UserId INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE SourceIPs (
    IpId INT AUTO_INCREMENT PRIMARY KEY,
    IpAddress VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE LoginAttempts (
    AttemptId INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    IpId INT NOT NULL,
    TTY VARCHAR(50),
    AttemptTime VARCHAR(100),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE,
    FOREIGN KEY (IpId) REFERENCES SourceIPs(IpId),
    -- Ensure each field contains only single values to comply with 1NF 
    INDEX (UserId),
    INDEX (IpId)
);
EOF

# Loop through both the January and December files
for FILE in all_failed_logins_january_2026.txt all_failed_logins_december_2025.txt; do
    echo "Processing $FILE..."
    
    # Read the file line by line
    # Standard lastb format: user tty ip date_info
    grep -v "^$" "$FILE" | while read -r USER TTY IP REST; do
        # Validate that the third column is an IP address
        if [[ "$IP" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
            # 1. Add User (Insert Ignore avoids duplicates)
            echo "INSERT IGNORE INTO Users (Username) VALUES ('$USER');" >> $OUTPUT
            
            # 2. Add IP (Insert Ignore avoids duplicates)
            echo "INSERT IGNORE INTO SourceIPs (IpAddress) VALUES ('$IP');" >> $OUTPUT
            
            # 3. Add the Attempt (Linked via Foreign Keys [cite: 17])
            echo "INSERT INTO LoginAttempts (UserId, IpId, TTY, AttemptTime) 
                  SELECT u.UserId, i.IpId, '$TTY', '$REST' 
                  FROM Users u, SourceIPs i 
                  WHERE u.Username = '$USER' AND i.IpAddress = '$IP';" >> $OUTPUT
        fi
    done
done

echo "Done! Run 'docker exec -i <container> mariadb -u root -p < $OUTPUT' to import."
