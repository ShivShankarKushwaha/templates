#!/bin/bash

# Define the image name
IMAGE_NAME="advanced"

echo "Running container from image: $IMAGE_NAME $1"
# Get all containers related to the specific image
CONTAINERS=$(docker ps -a -q --filter ancestor="$IMAGE_NAME")

# Stop and remove containers if 'remove' is passed
if [ "$1" == "--remove" ]; then
  if [ ! -z "$CONTAINERS" ]; then
    echo "Stopping containers related to image: $IMAGE_NAME"
    docker stop $CONTAINERS

    echo "Removing containers related to image: $IMAGE_NAME"
    docker rm $CONTAINERS
  else
    echo "No running containers found for image: $IMAGE_NAME"
  fi
else
  echo "Skipping container removal as 'remove' argument was not provided."
fi

# Open localhost:3000 in the browser (macOS-specific using the 'open' command)
echo "Opening http://localhost:5500 in your browser..."
open http://localhost:5500

# load the environment variables
source .env

# Run the container
docker run -p 5500:5500 $IMAGE_NAME
