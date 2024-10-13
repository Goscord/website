# BUILDER:
FROM node:20-alpine AS builder
WORKDIR /app
  
# Enable PNPM:
RUN corepack enable

# Install dependencies:
COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Use environment variables (Railway):
ARG GIT_GITHUB_TOKEN

# Build NextJS:
COPY . .

RUN pnpm run build

# RUNNER:
FROM node:20-alpine AS runner
WORKDIR /app

# Define environment variables for execution:
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV="production"
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only necessary files from the build stage:
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Run the server:
CMD ["node", "server.js"]