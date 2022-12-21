FROM php:8.2-cli-alpine

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod uga+x /usr/local/bin/install-php-extensions \
    && install-php-extensions \
        @composer \
        bcmath \
        exif \
        gd \
        intl \
        pcntl \
        pdo_pgsql \
        redis \
        soap \
        pgsql \
        xmlrpc \
        zip

RUN apk add --no-cache supervisor

RUN rm -f /etc/localtime \
    && ln -sf /usr/share/zoneinfo/Asia/Almaty /etc/localtime \
    && echo 'Asia/Almaty' > /etc/timezone

COPY start.sh /usr/local/bin/start
RUN apk add --no-cache --upgrade bash && chmod u+x /usr/local/bin/start

CMD ["/usr/local/bin/start"]
