#! /bin/bash

#fis server start --type node --port 2018 --root ../ && fis release --file ../fis/dev.js --dest local --watch -L

cd static/
fis release --file ../fis/dev.js --dest local --watch