# Laravel Template

### Change repository
```bash
git remote rename origin old-origin
git remote add origin git@gitlab.ffin.kz:<user>/<repository>.git
git push -u origin --all
git push -u origin --tags
```

### Starting
Rename `APP_NAME` in `.env.docker`
```dotenv
APP_NAME=NEW_APP_NAME
```
then using local machine
```bash
php artisan migrate --seed
```
or using docker
```bash
make build
```

### Dependencies
1. PHP
    - [darkaonline/l5-swagger](https://github.com/DarkaOnLine/L5-Swagger) - OpenApi or Swagger Specification for your project
    - [tcg/voyager](https://voyager.devdojo.com/) - Admin panel
    - [barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar) - Debug Bar
    - [barryvdh/laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper) - Package generates helper files that enable your IDE to provide accurate autocompletion
    - [nunomaduro/larastan](https://github.com/nunomaduro/larastan) - Static Analyzer
    - [stechstudio/laravel-php-cs-fixer](https://github.com/stechstudio/Laravel-PHP-CS-Fixer) - PHP Coding Style Fixer
2. JS
    - [bootstap 5](https://getbootstrap.com/) - Frontend toolkit

### Common commands
1. Generate api documentation at `api/documentation`
```bash
composer generate-api-doc
```
2. Generate PHPDocs for models
```bash
php artisan ide-helper:models "App\Models\Post"
```
3. Analyze code using `larastan`
```bash
composer larastan
```
4. Coding style fix 
```bash
composer cs-fix
```
### Docker support
Look at `Makefile`

### If you need to connect to container
```shell
$ docker exec -it APP_NAME_{php|scheduler|queue|websocket} bash
$ docker exec -it APP_NAME_redis redis-cli
$ docker exec -it APP_NAME_pgsql psql -U APP_NAME_admin -d APP_NAME
$ docker exec -it APP_NAME_mssql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P DB_PASSWORD
```

### Switch to MSSQL database
1. Change database name in `docker/mssql/create-database.sql` (from `test` to your name)
2. Change php drivers in `docker/php/Dockerfile` from `pgsql` and `pdo_pgsql` to `sqlsrv` and `pdo_sqlsrv`
3. Uncomment `mssql` section and volume in `docker-compose.yml`
4. Change environment variables in `.env`
