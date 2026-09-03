import { useState } from 'react'
import { foods, categories } from '../data/foods'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import FoodCard from '../components/FoodCard'
export default function HealthyFoods() { const [query,setQuery]=useState(''); const [category,setCategory]=useState('All'); const filtered=foods.filter(f=>(category==='All'||f.category===category)&&`${f.name} ${f.description}`.toLowerCase().includes(query.toLowerCase())); return <div className="page"><div className="container"><PageIntro eyebrow="The food library" title="Eat the rainbow." text="Discover ingredients that make everyday eating more nourishing, flavorful, and fun."/><div className="toolbar"><SearchBar value={query} onChange={setQuery} placeholder="Search healthy foods..."/><CategoryFilter categories={categories} active={category} onChange={setCategory}/></div><div className="food-grid">{filtered.map(food=><FoodCard key={food.id} food={food}/>)}</div>{!filtered.length&&<Empty text="No foods match that search yet."/>}</div></div> }
export function PageIntro({eyebrow,title,text}) { return <div className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div> }
export function Empty({text}) { return <div className="empty"><p>{text}</p></div> }
