#! /bin/bash

#fis server start --type node --port 2018 --root ../ && fis release --file ../fis/release.js --dest local --watch

cd static/
fis release --file ../fis/dev.js --dest local --watch -L