import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HealthyFoods from './pages/HealthyFoods'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'
import Nutrition from './pages/Nutrition'
import MealPlanner from './pages/MealPlanner'
import BMICalculator from './pages/BMICalculator'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('nutribite-favorites') || '[]'))
  useEffect(() => localStorage.setItem('nutribite-favorites', JSON.stringify(favorites)), [favorites])
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  return <><Navbar favorites={favorites.length}/><main><Routes>
    <Route path="/" element={<Home/>}/><Route path="/foods" element={<HealthyFoods/>}/><Route path="/recipes" element={<Recipes favorites={favorites} onFavorite={toggleFavorite}/>}/><Route path="/recipes/:id" element={<RecipeDetails favorites={favorites} onFavorite={toggleFavorite}/>}/><Route path="/nutrition" element={<Nutrition/>}/><Route path="/planner" element={<MealPlanner/>}/><Route path="/bmi" element={<BMICalculator/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/>
  </Routes></main><Footer/></>
}
