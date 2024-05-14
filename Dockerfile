FROM nginx:alpine
# 时区
ENV TimeZone=Asia/Shanghai
COPY . /usr/share/nginx/html

# traefik自动注册发现
LABEL traefik.enable=true
LABEL traefik.http.routers.rbc.rule="Host(`rbc.oxcafebabe.cn`)"
LABEL traefik.http.routers.rbc.entrypoints=websecure
LABEL traefik.http.services.rbc.loadbalancer.server.port=80
LABEL traefik.http.routers.rbc.service=rbc
LABEL traefik.http.routers.rbc.tls.certresolver=leresolve
