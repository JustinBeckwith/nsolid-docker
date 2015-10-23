# Use the base nsolid nodejs runtime
FROM justinbeckwith/nsolid-runtime

# Install proxy and console
RUN mkdir /console && curl https://nsolid-download.nodesource.com/download/nsolid-console/release/v1.1.8/nsolid-console-v1.1.8-linux-x64.tar.gz| tar xvzf - -C /console --strip-components=1
WORKDIR /console