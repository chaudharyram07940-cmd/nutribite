import { foods } from './foods'

const recipeImages = foods.map((food) => food.image)
const recipeNames = ['Avocado Toast','Greek Salad','Oatmeal Bowl','Vegetable Soup','Quinoa Salad','Fruit Smoothie','Grilled Chicken Bowl','Healthy Pancakes','Chickpea Salad','Banana Oat Cookies','Lentil Soup','Veggie Wrap']
const descriptions = ['A bright, satisfying favorite made for busy mornings.','Fresh ingredients, bold herbs, and a simple homemade dressing.','A nourishing bowl with slow-release energy and plenty of texture.','Comforting, colorful vegetables simmered until tender.']

export const recipes = recipeNames.map((name, index) => ({
  id: index + 1, name, description: descriptions[index % descriptions.length], image: recipeImages[index % recipeImages.length],
  time: `${15 + (index % 4) * 10} min`, difficulty: index % 3 === 0 ? 'Easy' : 'Medium', calories: 280 + index * 22,
  protein: 8 + index * 2, carbs: 32 + index * 3, fats: 9 + index, category: ['Breakfast','Salads','Breakfast','Dinner','Lunch','Smoothies'][index % 6],
  ingredients: ['2 cups fresh seasonal produce', '1 cup whole grains or legumes', '1 tbsp extra virgin olive oil', 'Fresh herbs, lemon, and seasoning'],
  steps: ['Prepare and wash all ingredients.', 'Combine the base ingredients in a large bowl.', 'Add dressing and season to taste.', 'Serve fresh and enjoy mindfully.'],
}))
