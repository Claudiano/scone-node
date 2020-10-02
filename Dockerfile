FROM sconecuratedimages/apps:node-10.14-alpine

ENV SCONE_HEAP=1G
ENV SCONE_CAS_ADDR=127.0.0.1
ENV SCONE_LAS_ADDR=127.0.0.1
ENV SCONE_LOG=7

ADD . /home/myapp

EXPOSE 443

WORKDIR /home/myapp


RUN apk add --no-cache nodejs-npm \
    && npm install 
    

#CMD SCONE_VERSION=1 node app/app.js