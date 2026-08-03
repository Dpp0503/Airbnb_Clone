package com.example.demo.models;

import java.util.List;

public record PhotoCategory(
    String title,
    List<String> imageUrls
) {}
