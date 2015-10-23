# N|Solid runtime
This is an example of using the [justinbeckwith/nsolid-runtime](https://hub.docker.com/r/justinbeckwith/nsolid-runtime/) docker image to bootstrap a simple nodejs application.  To use this, create a dockerfile with the following contents, and customize:

```dockerfile
# Use the base docker image with nsolid
FROM justinbeckwith/nsolid-runtime

# Install npm dependendencies
ADD . /app
RUN npm --unsafe-perm install

# Export environment variables needed for nsolid to connect to the hub
ENV NSOLID_APPNAME=nsolid-demo 
ENV NSOLID_HUB=hub-dot-nsolid-demo.appspot.com:4001 
ENV NSOLID_SOCKET=1111

# Open up port for the hub to talk to the agent
EXPOSE 1111
```

To deploy, update the package.json to use your project and run `npm run deploy`