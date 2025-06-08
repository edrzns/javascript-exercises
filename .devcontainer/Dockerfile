# Use official Node.js LTS image
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# Optional: set working directory
WORKDIR /workspace

# Install global dev tooling if needed
# RUN npm install -g nodemon

# Copy package definitions, install dependencies
COPY package*.json ./
RUN npm ci

# Copy remaining code
COPY . .

# Expose application port (adjust if needed)
EXPOSE 3000

# Default command (override via launch.json or at runtime)
CMD ["bash"]
