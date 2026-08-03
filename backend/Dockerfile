# Build Stage
FROM maven:3.9.6-eclipse-temurin-17-alpine AS builder

WORKDIR /app

# Copy Maven POM and download dependencies to leverage Docker layer caching
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source files and package the application
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime Stage
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Security: Create non-root user and group
RUN addgroup -S spring && adduser -S spring -G spring

# Copy compiled executable JAR from builder stage (deterministic name)
COPY --from=builder /app/target/app.jar app.jar

# Set file ownership
RUN chown -R spring:spring /app

# Switch to non-root user
USER spring

# Expose Spring Boot application port
EXPOSE 8080

# Configure JVM flags optimized for Render's 512MB free tier memory limit
ENV JAVA_OPTS="-Xmx256m -Xms128m -XX:+UseG1GC -XX:+ExitOnOutOfMemoryError"

# Launch application with exec so java process runs as PID 1
ENTRYPOINT ["sh", "-c", "exec java $JAVA_OPTS -jar app.jar"]
