# Use the base nsolid nodejs runtime
FROM justinbeckwith/nsolid-runtime

# Install supervisor to run multiple processes
RUN apt-get update && apt-get install -y supervisor

# Install etcd
RUN mkdir /etcd && curl -L  https://github.com/coreos/etcd/releases/download/v2.2.1/etcd-v2.2.1-linux-amd64.tar.gz| tar xzvf - -C /etcd --strip-components=1

# Install nsolid|proxy
RUN mkdir /proxy && curl https://nsolid-download.nodesource.com/download/nsolid-proxy/release/v3.2.2/nsolid-proxy-v3.2.2.tar.gz| tar xvzf - -C /proxy --strip-components=1
EXPOSE 4001 9000
WORKDIR /proxy

# User supervisord to launch node and etcd
COPY supervisord.conf /etc/supervisor/supervisord.conf
CMD ["/usr/bin/supervisord"]
