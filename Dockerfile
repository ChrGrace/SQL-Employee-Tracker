# Use the official MySQL 8.0 image as the base
FROM mysql:8.0

# Set environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=company

# Copy the schema SQL file into the image
COPY ./sql/schema.sql /docker-entrypoint-initdb.d/

# Copy the seeder SQL file into the image
COPY ./sql/seeder.sql /docker-entrypoint-initdb.d/

# Expose the default MySQL port
EXPOSE 3306
