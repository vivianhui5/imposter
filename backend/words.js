// Curated word library for the Imposter game
// These are places, objects, and concepts that work well for the game

export const wordLibrary = [
  // Places
  "Airport",
  "Beach",
  "Library",
  "Museum",
  "Restaurant",
  "Hospital",
  "School",
  "Park",
  "Cinema",
  "Gym",
  "Zoo",
  "Mall",
  "Subway",
  "Hotel",
  "Casino",
  "Theater",
  "Bank",
  "Supermarket",
  "Spa",
  "Church",
  
  // Objects
  "Umbrella",
  "Bicycle",
  "Piano",
  "Camera",
  "Laptop",
  "Toothbrush",
  "Backpack",
  "Sunglasses",
  "Watch",
  "Mirror",
  "Pillow",
  "Blanket",
  "Candle",
  "Scissors",
  "Wallet",
  "Headphones",
  "Telescope",
  "Guitar",
  "Microphone",
  "Paintbrush",
  
  // Food & Drinks
  "Pizza",
  "Sushi",
  "Chocolate",
  "Coffee",
  "Sandwich",
  "Ice Cream",
  "Popcorn",
  "Salad",
  "Burger",
  "Taco",
  "Smoothie",
  "Pancakes",
  "Cookies",
  "Pasta",
  "Soup",
  
  // Activities & Concepts
  "Birthday Party",
  "Wedding",
  "Concert",
  "Camping",
  "Cooking",
  "Swimming",
  "Dancing",
  "Reading",
  "Painting",
  "Yoga",
  "Hiking",
  "Shopping",
  "Karaoke",
  "Picnic",
  "Barbecue",
  
  // Animals
  "Elephant",
  "Dolphin",
  "Penguin",
  "Butterfly",
  "Lion",
  "Giraffe",
  "Owl",
  "Tiger",
  "Panda",
  "Kangaroo",
  
  // Professions
  "Teacher",
  "Doctor",
  "Chef",
  "Astronaut",
  "Firefighter",
  "Police Officer",
  "Artist",
  "Musician",
  "Pilot",
  "Scientist"
];

// Get a random word from the library
export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordLibrary.length);
  return wordLibrary[randomIndex];
}

