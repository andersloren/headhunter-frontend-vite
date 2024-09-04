# Use the official Node.js image from Docker Hub
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /headhunter-frontend

# Copy package.json and package-lock.json files
COPY package.json .

# Install the dependencies
RUN npm install

# ARG REACT_PROFILE: ${REACT_PROFILE}
ARG REACT_PROFILE 

COPY .env.$REACT_PROFILE .env

COPY . .

# Start the app
# CMD ["npm", "start"] 
CMD ["npm", "run", "dev", "--", "--host"] 
