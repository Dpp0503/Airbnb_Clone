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

# Strict JVM memory bounds tuned specifically for 512MB RAM free-tier hosting (Render/Railway/Fly)
ENV JAVA_OPTS="-Xmx192m -Xms96m -XX:MaxMetaspaceSize=128m -XX:ReservedCodeCacheSize=32m -Xss512k -XX:+UseG1GC -XX:+ExitOnOutOfMemoryError"

# Launch application with exec to run as PID 1
ENTRYPOINT ["sh", "-c", "exec java $JAVA_OPTS -jar app.jar"]
