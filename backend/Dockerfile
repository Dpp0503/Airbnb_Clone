# Build Stage
FROM maven:3.9.6-eclipse-temurin-17-alpine AS builder

WORKDIR /app

# Copy Maven POM and download dependencies to leverage Docker layer caching
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source files and package the application
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime Stage (Debian-slim glibc image avoids Alpine musl memory fragmentation)
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Security: Create non-root user and group
RUN groupadd -r spring && useradd -r -g spring spring

# Copy compiled executable JAR from builder stage
COPY --from=builder /app/target/app.jar app.jar

# Set file ownership
RUN chown -R spring:spring /app

# Switch to non-root user
USER spring

# Expose Spring Boot application port
EXPOSE 8080

# Environment variables for JVM memory limits
ENV JAVA_OPTS="-Xmx320m -Xms128m -XX:+UseG1GC"

# Direct execution entrypoint without shell wrapper
ENTRYPOINT ["java", "-Xmx320m", "-Xms128m", "-XX:+UseG1GC", "-jar", "app.jar"]
