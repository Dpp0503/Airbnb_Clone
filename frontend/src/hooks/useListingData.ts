import { useState, useEffect } from 'react';
import type { ListingDTO } from '../types';

export function useListingData() {
  const [listing, setListing] = useState<ListingDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
    fetch(`${apiBaseUrl}/api/v1/listings/1`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch listing data');
        }
        return response.json();
      })
      .then(data => {
        // Override photo tour to use local UI parity images
        data.photoTour = [
          {
            title: 'Living room 1',
            description: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💖 🌴",
            subtitle: 'Sofa • Air conditioning • Ceiling fan • TV',
            imageUrls: ['/Image/LivingRoom_1_1.png', '/Image/LivingRoom_1_2.png', '/Image/LivingRoom_1_3.png']
          },
          {
            title: 'Living room 2',
            subtitle: 'Ceiling fan • Hot tub',
            imageUrls: [
              '/Image/LivingRoom_2_1.png', '/Image/LivingRoom_2_2.png', '/Image/LivingRoom_2_3.png',
              '/Image/LivingRoom_2_4.png', '/Image/LivingRoom_2_5.png', '/Image/LivingRoom_2_6.png', '/Image/LivingRoom_2_7.png'
            ]
          },
          {
            title: 'Full kitchen',
            subtitle: '',
            imageUrls: ['/Image/FullKitchen_1_1.png', '/Image/FullKitchen_1_2.png']
          },
          {
            title: 'Bedroom',
            subtitle: '',
            imageUrls: [
              '/Image/Bedroom_1_1.png', '/Image/Bedroom_1_2.png', '/Image/Bedroom_1_3.png',
              '/Image/Bedroom_1_4.png', '/Image/Bedroom_1_5.png', '/Image/Bedroom_1_6.png'
            ]
          },
          {
            title: 'Full bathroom',
            subtitle: '',
            imageUrls: ['/Image/Bathroom_1_1.png']
          },
          {
            title: 'Gym',
            subtitle: '',
            imageUrls: [
              '/Image/Gym_1_1.png', '/Image/Gym_1_2.png', '/Image/Gym_1_3.png',
              '/Image/Gym_1_4.png', '/Image/Gym_1_5.png'
            ]
          },
          {
            title: 'Exterior',
            subtitle: '',
            imageUrls: [
              '/Image/Exterior_1_1.png', '/Image/Exterior_1_2.png', '/Image/Exterior_1_3.png',
              '/Image/Exterior_1_4.png', '/Image/Exterior_1_5.png', '/Image/Exterior_1_6.png'
            ]
          },
          {
            title: 'Pool',
            subtitle: '',
            imageUrls: ['/Image/Pool_1_1.png', '/Image/Pool_1_2.png', '/Image/Pool_1_3.png']
          },
          {
            title: 'Additional photos',
            subtitle: '',
            imageUrls: [
              '/Image/AdditionalPhotos_1_1.png', '/Image/AdditionalPhotos_1_2.png', '/Image/AdditionalPhotos_1_3.png',
              '/Image/AdditionalPhotos_1_4.png', '/Image/AdditionalPhotos_1_5.png', '/Image/AdditionalPhotos_1_6.png',
              '/Image/AdditionalPhotos_1_7.png', '/Image/AdditionalPhotos_1_8.png', '/Image/AdditionalPhotos_1_9.png',
              '/Image/AdditionalPhotos_1_10.png'
            ]
          }
        ];
        
        data.description = "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💖 🌴";
        data.metrics.overallRating = 4.95;
        data.metrics.totalReviews = 19;
        
        setListing(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { listing, loading, error };
}
