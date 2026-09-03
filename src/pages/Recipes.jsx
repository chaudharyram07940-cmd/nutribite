import { useState } from 'react'
import { recipes } from '../data/recipes'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import RecipeCard from '../components/RecipeCard'
import { PageIntro, Empty } from './HealthyFoods'
const categories=['All','Breakfast','Salads','Lunch','Dinner','Smoothies']
export default function Recipes({favorites,onFavorite}) { const [query,setQuery]=useState('');const [category,setCategory]=useState('All');const filtered=recipes.filter(r=>(category==='All'||r.category===category)&&`${r.name} ${r.description}`.toLowerCase().includes(query.toLowerCase()));return <div className="page"><div className="container"><PageIntro eyebrow="The recipe journal" title="Healthy tastes better." text="Easy, colorful recipes designed for the way you actually cook and eat."/><div className="toolbar"><SearchBar value={query} onChange={setQuery} placeholder="Search recipes..."/><CategoryFilter categories={categories} active={category} onChange={setCategory}/></div><div className="recipe-grid">{filtered.map(recipe=><RecipeCard key={recipe.id} recipe={recipe} favorite={favorites.includes(recipe.id)} onFavorite={onFavorite}/>)}</div>{!filtered.length&&<Empty text="No recipes found. Try a different ingredient."/>}</div></div> }
