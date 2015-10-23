# Use the base docker image with nsolid
FROM justinbeckwith/nsolid-runtime

# Install npm dependendencies
ADD . /app
RUN npm --unsafe-perm install

# Export environment variables needed for nsolid to connect to the hub
ENV NSOLID_APPNAME=nsolid-demo NSOLID_HUB=hub.nsolid-demo.appspot.com:4001 NSOLID_SOCKET=1111

# Open up port for the hub to talk to the agent
EXPOSE 1111