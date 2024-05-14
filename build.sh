git pull

docker build -t rbc .

(docker stop rbc && docker rm rbc) || true

docker run --name rbc -d --network traefik-public --restart=always rbc
