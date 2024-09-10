# Use the official Node.js image as the base image
FROM node:18.19.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3030

# Define the command to run the app
CMD ["npm", "run", "start"]
