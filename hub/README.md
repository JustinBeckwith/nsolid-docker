# [justinbeckwith/nsolid-hub](https://hub.docker.com/r/justinbeckwith/nsolid-hub/)

This image provides the centralized hub (proxy and agent) for N|Solid.  It uses supervisor to launch the etcd and node processes inside of a container.  

## Example usage

```Dockerfile
FROM justinbeckwith/nsolid-hub
```
