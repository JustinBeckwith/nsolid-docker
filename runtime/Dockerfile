# Use the AppEngine base jessie image
FROM gcr.io/google_appengine/base

# Install updates
RUN apt-get update -y && apt-get install --no-install-recommends -y -q curl python build-essential git ca-certificates && \
    apt-get clean && rm /var/lib/apt/lists/*_*

# Install nsolid
RUN mkdir /nodejs && curl https://nsolid-download.nodesource.com/download/nsolid-node/release/v1.0.2/nsolid-v1.0.2-linux-x64.tar.gz| tar xvzf - -C /nodejs --strip-components=1

# Set env vars
ENV PATH $PATH:/nodejs/bin
ENV NODE_ENV production
ENV PORT 8080
WORKDIR /app

# Go go gadget nsolid|node
CMD ["npm", "start"]
