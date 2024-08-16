#!/bin/bash

docker stop weather

docker rm weather

docker build -t weather-app .

docker run --name weather -d -p 8089:80 --restart unless-stopped weather-app