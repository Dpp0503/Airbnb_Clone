package com.example.demo.services;

import com.example.demo.models.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ListingService {

    private final Map<String, ListingDTO> listings;

    public ListingService() {
        this.listings = Map.of(
            "1", new ListingDTO(
                "1",
                "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
                "Entire serviced apartment in Candolim, India",
                "Candolim, Goa, India",
                new PropertyDetails(3, 1, 1, 1),
                new HostDetails(
                    "Mirashya Homes", 
                    "/UtilsImage/Hosted_by_Mirashya_Homes_Image.png",
                    2, 
                    1463, 
                    4.68, 
                    100, 
                    "within an hour",
                    List.of(
                        new CoHost("Sharath", "https://randomuser.me/api/portraits/men/1.jpg"),
                        new CoHost("Simran", "https://randomuser.me/api/portraits/women/2.jpg"),
                        new CoHost("Shruti", "https://randomuser.me/api/portraits/women/3.jpg"),
                        new CoHost("Aman Dev Pahwa", "https://randomuser.me/api/portraits/men/4.jpg"),
                        new CoHost("Pallavi", "https://randomuser.me/api/portraits/women/5.jpg"),
                        new CoHost("Amisha", "https://randomuser.me/api/portraits/women/6.jpg")
                    )
                ),
                List.of(
                    new Highlight("Outdoor entertainment", "Outdoor entertainment", "The pool and alfresco dining are great for summer trips."),
                    new Highlight("Designed for staying cool", "Designed for staying cool", "Beat the heat with the A/C and ceiling fan."),
                    new Highlight("Self check-in", "Self check-in", "You can check in with the building staff.")
                ),
                "Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's...",
                List.of(
                    new PhotoCategory("AdditionalPhotos", List.of(
                        "/Image/AdditionalPhotos_1_1.png",
                        "/Image/AdditionalPhotos_1_2.png",
                        "/Image/AdditionalPhotos_1_3.png",
                        "/Image/AdditionalPhotos_1_4.png",
                        "/Image/AdditionalPhotos_1_5.png",
                        "/Image/AdditionalPhotos_1_6.png",
                        "/Image/AdditionalPhotos_1_7.png",
                        "/Image/AdditionalPhotos_1_8.png",
                        "/Image/AdditionalPhotos_1_9.png",
                        "/Image/AdditionalPhotos_1_10.png"
                    )),
                    new PhotoCategory("Bathroom", List.of(
                        "/Image/Bathroom_1_1.png"
                    )),
                    new PhotoCategory("Bedroom", List.of(
                        "/Image/Bedroom_1_1.png",
                        "/Image/Bedroom_1_2.png",
                        "/Image/Bedroom_1_3.png",
                        "/Image/Bedroom_1_4.png",
                        "/Image/Bedroom_1_5.png",
                        "/Image/Bedroom_1_6.png"
                    )),
                    new PhotoCategory("Exterior", List.of(
                        "/Image/Exterior_1_1.png",
                        "/Image/Exterior_1_2.png",
                        "/Image/Exterior_1_3.png",
                        "/Image/Exterior_1_4.png",
                        "/Image/Exterior_1_5.png",
                        "/Image/Exterior_1_6.png"
                    )),
                    new PhotoCategory("FullKitchen", List.of(
                        "/Image/FullKitchen_1_1.png",
                        "/Image/FullKitchen_1_2.png"
                    )),
                    new PhotoCategory("Gym", List.of(
                        "/Image/Gym_1_1.png",
                        "/Image/Gym_1_2.png",
                        "/Image/Gym_1_3.png",
                        "/Image/Gym_1_4.png",
                        "/Image/Gym_1_5.png"
                    )),
                    new PhotoCategory("LivingRoom", List.of(
                        "/Image/LivingRoom_1_1.png",
                        "/Image/LivingRoom_1_2.png",
                        "/Image/LivingRoom_1_3.png",
                        "/Image/LivingRoom_2_1.png",
                        "/Image/LivingRoom_2_2.png",
                        "/Image/LivingRoom_2_3.png",
                        "/Image/LivingRoom_2_4.png",
                        "/Image/LivingRoom_2_5.png",
                        "/Image/LivingRoom_2_6.png",
                        "/Image/LivingRoom_2_7.png"
                    )),
                    new PhotoCategory("Pool", List.of(
                        "/Image/Pool_1_1.png",
                        "/Image/Pool_1_2.png",
                        "/Image/Pool_1_3.png"
                    ))
                ),
                List.of(
                    new SleepSpace("Bedroom", "1 double bed", "/Image/Bedroom_1_1.png"),
                    new SleepSpace("Living room", "1 sofa", "/Image/LivingRoom_1_1.png")
                ),
                List.of(
                    "Hairdryer", "Cleaning products", "Shampoo", "Hot water", "Shower gel",
                    "Washing machine", "Hangers", "Bed linen", "Room-darkening blinds", "Iron", "Clothes storage", "Cot",
                    "TV",
                    "Air conditioning", "Ceiling fan",
                    "Exterior security cameras on property", "Carbon monoxide alarm", "Smoke alarm",
                    "Wifi", "Dedicated workspace",
                    "Kitchen", "Fridge", "Freezer", "Microwave", "Cooking basics", "Crockery and cutlery", "Kettle", "Coffee", "Wine glasses", "Toaster", "Blender", "Cooker",
                    "Private entrance",
                    "Patio or balcony", "Outdoor dining area",
                    "Free parking on premises", "Pool", "Hot tub", "Gym",
                    "Pets allowed", "Cleaning available during stay", "Long-term stays allowed", "Self check-in"
                ),
                List.of(
                    new Review("Amit", "2 months on Airbnb", 5.0, "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."),
                    new Review("Aheesh", "3 years on Airbnb", 5.0, "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."),
                    new Review("Samiksha", "8 months on Airbnb", 5.0, "the host nitish was really great help"),
                    new Review("Vedant", "4 years on Airbnb", 5.0, "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine...."),
                    new Review("Vaibhav S", "3 years on Airbnb", 5.0, "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too."),
                    new Review("Mohd", "5 years on Airbnb", 5.0, "Great place. Exactly as described in the listing.")
                ),
                new Metrics(4.95, 19, 5.0, 5.0, 5.0, 5.0, 4.8, 4.8),
                List.of(
                    new Rule("Cancellation policy", "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund. Review this host's full policy for details.")
                ),
                List.of(
                    new Rule("Check-in", "Check-in after 2:00 pm"),
                    new Rule("Checkout", "Checkout before 11:00 am"),
                    new Rule("Guests", "3 guests maximum")
                ),
                List.of(
                    new Rule("Carbon monoxide alarm", "Carbon monoxide alarm not reported"),
                    new Rule("Smoke alarm", "Smoke alarm not reported"),
                    new Rule("Cameras", "Exterior security cameras on property")
                ),
                new Pricing(28499, "₹", 5)
            )
        );
    }

    public ListingDTO getListingById(String id) {
        return listings.get(id);
    }
}
