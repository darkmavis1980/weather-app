# Weather App

This project is the client side code that is supposed to run against [this APIs](https://github.com/darkmavis1980/rpi5-home-assistant), so please setup that first before running this client.

## Pre-requisites

- Node.js 18 or above
- Docker
- APIs already setup and ready to go

## Configuration

Clone the `.env.sample` file and replace the `VITE_BASE_API` value with the API endpoints where you are running the backend.

## Docker

Build the app image:

```sh
docker build -t weather-app .
```

Star the container:
```sh
docker run --name weather --rm -d -p 8089:80 weather-app
```

Stop the container:

```sh
docker stop weather
```

Access to docker container shell:

```sh
docker exec -it weather bash
```

Show the container logs:

```sh
docker container logs weather -f
```

## Development mode

To run in development mode, please use the following command:

```sh
npm run dev
```