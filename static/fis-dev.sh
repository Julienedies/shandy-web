#! /bin/bash
fis server start --type node --port 2018 --root ../public && fis release --file ../fis/dev.js --dest local --watch
# fis release --file ../fis/dev.js --dest local --watch
