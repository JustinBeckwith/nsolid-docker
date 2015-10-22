# Copyright 2015, Google, Inc.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# Base Dockerfile for App Engine Node runtime.

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
 WORKDIR /app

# Go go gadget nsolid|node
CMD ["npm", "start"]
