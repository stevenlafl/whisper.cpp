FROM debian:latest

RUN apt-get -y update && apt-get install -y make gcc g++ python3 python3-pip clang git

RUN git clone https://github.com/emscripten-core/emsdk.git /opt/emsdk
WORKDIR /opt/emsdk

RUN ./emsdk install latest
RUN ./emsdk activate latest

RUN apt-get install -y cmake

USER 1000:1000

ENV HOME /root

SHELL ["/bin/bash", "-c"]

WORKDIR /root