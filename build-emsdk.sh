#!/bin/bash

source /opt/emsdk/emsdk_env.sh

# install dependencies
cd /root

# # setup environment
# export PATH=$PATH:/root/emscripten
# export BINARYEN_ROOT=/root/binaryen

# build
mkdir -p build-em && cd build-em
emcmake cmake .. && make -j
#emcc -I . -s ERROR_ON_UNDEFINED_SYMBOLS=0 -lembind ../bindings/javascript/emscripten.cpp --embind-emit-tsd ../bindings/javascript/whisper.d.ts

node --experimental-wasm-threads --experimental-wasm-simd ../tests/test-whisper.js

cd ../
rm -rf build-em