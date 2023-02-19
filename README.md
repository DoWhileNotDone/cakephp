# Sample Cake PHP 

## Local Installation with Docker ##

1. Build the docker image for php-fpm
   * docker compose build

2. Start the docker containers
   * docker-compose up
   * **Note**: On first run, this will pull down the initial images required   

3. Install package dependencies
   * docker-compose exec php-fpm composer install
   * install yarn packages
      * docker run -it --rm -v "$PWD":/app -w "/app" node:latest yarn install --loglevel verbose

4. Configure site 
   * cp config/app_local.example.php config/app_local.php

5. Build Assets
   * docker run -it --rm -v "$PWD":/app -w "/app" node:latest yarn run build

6. Create Database
   * docker compose exec -T mysql mysql -u root -prootpass < ./docker/config/mysql/cake_db_create.sql
   * docker compose exec php-fpm  bin/cake migrations migrate 
   * Optionally, seed data: docker compose exec php-fpm bin/cake migrations seed

**Notes**
 - Uses PHP v8 and MySQL/MariaDB v8

## Running Locally ##

1. Start the docker containers (detached, so run in the background)
   * docker-compose up -d 

2. View the docker logs 
   * docker compose logs -f

3. Using the containers
   * The code can be edited in an ide, the directory is mapped into the php and nginx directories
     * http://localhost:8881/
   * Run the php unit tests
      * docker compose exec php-fpm vendor/bin/phpunit
   * Access the db via cli
      * docker compose exec mysql mysql -u cake_usr -pcake_pw cake_app
      * The db volume is mapped to ./docker/volumes/mysql so it persists
   * Interacting with yarn
      * docker run -it --rm -v "$PWD":/app -w "/app" node:latest {command here}
   * Interacting with cake
     * docker compose exec php-fpm bin/cake {command here}
   * View Mail 
     * http://localhost:8882/
     * mailtrap/mailtrap 

4. Stop the running containers
   * docker compose down --remove-orphans
    

