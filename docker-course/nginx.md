# Let's run an Nginx container

Type the following Docker commands:

### Pull and run a Nginx server

`docker run -d -p 8080:80 --name webserver nginx`

### List the running containers

`docker ps`

### List the images

`docker images`

### Attach to the container

`docker container exec -it webserver bash`

### Stop the container

`docker stop webserver`

### Remove the container from memory

`docker rm webserver`

### Remove the image

`docker rmi nginx`

### Remove all stopped containers

`docker container prune`

### Remove all unused images

`docker image prune`
