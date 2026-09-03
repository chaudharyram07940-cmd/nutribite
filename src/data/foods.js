export const categories = ['All', 'Fruits', 'Vegetables', 'Salads', 'Smoothies', 'Breakfast', 'Lunch', 'Dinner', 'Healthy Snacks']

const images = {
  bowl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
  berries: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85',
  avocado: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=900&q=85',
  salad: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85',
  smoothie: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85',
  toast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85',
}

export const foods = [
  ['Rainbow Nourish Bowl','Colorful vegetables, grains, and creamy tahini.','Salads',420,18,images.bowl],
  ['Berry Power Mix','Antioxidant-rich berries for a naturally sweet boost.','Fruits',95,1,images.berries],
  ['Avocado','Creamy, heart-friendly healthy fats and fiber.','Fruits',240,3,images.avocado],
  ['Garden Greens','Crisp greens with herbs and lemon dressing.','Vegetables',180,7,images.salad],
  ['Green Glow Smoothie','Spinach, mango, banana, and plant protein.','Smoothies',280,16,images.smoothie],
  ['Avocado Toast','Whole grain toast topped with avocado and seeds.','Breakfast',310,10,images.toast],
  ['Mediterranean Plate','Hummus, cucumber, tomatoes, and warm pita.','Lunch',460,17,images.bowl],
  ['Roasted Veggie Tray','Seasonal vegetables roasted with olive oil.','Dinner',340,12,images.salad],
  ['Chia Pudding','Chia seeds soaked in almond milk and berries.','Healthy Snacks',220,8,images.berries],
  ['Citrus Salad','Orange, grapefruit, mint, and pistachio.','Fruits',150,4,images.berries],
  ['Protein Oats','Rolled oats, cinnamon, banana, and almond butter.','Breakfast',390,20,images.toast],
  ['Crunchy Chickpeas','Oven-roasted chickpeas with smoked paprika.','Healthy Snacks',210,9,images.bowl],
].map(([name, description, category, calories, protein, image], id) => ({ id: id + 1, name, description, category, calories, protein, image }))
