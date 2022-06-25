#!/bin/bash

nvm use 14

yarn build

cp -rf build/ /home/outliner/.cache/rclone/webgui/current/
