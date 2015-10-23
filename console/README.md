# [justinbeckwith/nsolid-console](https://hub.docker.com/r/justinbeckwith/nsolid-console/)

This image provides a base for the N|Solid console.  Make sure to create a `.nsolid-clirc` in your CWD that points to your hub endpoint. 

## Example usage

#### Dockerfile
```Dockerfile
# Use the base docker image with nsolid
FROM justinbeckwith/nsolid-console
COPY .nsolid-clirc /console/.nsolid-clirc
ENV PORT=8080
```

#### .nsolid-clirc
```json
{
  "hub": "http://hub.nsolid-demo.appspot.com:9000"
}
```




