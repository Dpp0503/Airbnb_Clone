package com.example.demo.models;

import java.util.List;

public record HostDetails(
    String name,
    String avatarUrl,
    int yearsHosting,
    int totalReviews,
    double rating,
    int responseRate,
    String responseTime,
    List<CoHost> coHosts
) {}
