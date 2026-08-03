package com.example.demo.models;

public record Metrics(
    double overallRating,
    int totalReviews,
    double cleanliness,
    double accuracy,
    double checkIn,
    double communication,
    double location,
    double value
) {}
