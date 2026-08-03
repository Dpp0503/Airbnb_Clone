package com.example.demo.models;

import java.util.List;

public record ListingDTO(
    String id,
    String title,
    String subtitle,
    String location,
    PropertyDetails propertyDetails,
    HostDetails hostDetails,
    List<Highlight> highlights,
    String description,
    List<PhotoCategory> photoTour,
    List<SleepSpace> sleepSpaces,
    List<String> amenities,
    List<Review> reviews,
    Metrics metrics,
    List<Rule> cancellationPolicy,
    List<Rule> houseRules,
    List<Rule> safetyAndProperty,
    Pricing pricing
) {}
