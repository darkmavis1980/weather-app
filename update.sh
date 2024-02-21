#!/bin/bash

docker stop weather

docker build -t weather-app .

docker run --name weather --rm -d -p 8089:80 weather-app