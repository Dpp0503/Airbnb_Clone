package com.example.demo.models;

public record Review(
    String authorName,
    String date,
    double rating,
    String reviewText
) {}
