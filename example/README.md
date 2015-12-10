# N|Solid on Google App Engine

This is an example of configuring a nodejs application to run with N|Solid.  There are a few moving pieces here:

## [The App](./app)
This is a simple express web application that's configured to use the N|Solid distribution of nodejs instead of the standard distribtuion.  By itself, it's pretty much just a standard 4.x nodejs application.  

## [The Hub](./hub)
N|Solid comes with 3 main pieces - the runtime, the hub, and the console.  The Hub is the centralized service that keeps track of runtime agents, communicates with N|Solid runtime processes, and generally acts as the core of the service.  You need one of these.  You just need to deploy this once.  It pairs nicely with a console.

## [The Console](./console)
The N|Solid console provides the UI for reading data from the Hub.  Like the Hub, you only need one of these for many nodejs applications/services.  It's not strictly required, as you can just use the CLI.  
