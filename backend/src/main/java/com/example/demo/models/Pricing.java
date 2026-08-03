package com.example.demo.models;

public record Pricing(
    int basePrice,
    String currency,
    int nights
) {}
