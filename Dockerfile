# Step 1: Use a Node.js base image
FROM node:18-alpine AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm ci

# Step 5: Copy the rest of your app's code to the container
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Create a lightweight production image
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only the required files for running the app
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Set the default command to run the app
CMD ["npm", "start"]
