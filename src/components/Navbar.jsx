import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Search, Heart, Leaf } from 'lucide-react'

const links = [['Home','/'],['Healthy Foods','/foods'],['Recipes','/recipes'],['Nutrition','/nutrition'],['Meal Planner','/planner'],['BMI Calculator','/bmi'],['About','/about'],['Contact','/contact']]
export default function Navbar({ favorites = 0 }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container nav-inner">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark"><Leaf size={20} /></span> Nutri<span>Bite</span></Link>
    <nav className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
    <div className="nav-actions"><button className="icon-btn" aria-label="Search" onClick={() => document.querySelector('.global-search')?.focus()}><Search size={19} /></button><Link className="favorites-link" to="/recipes"><Heart size={19} /><span>{favorites}</span></Link><Link className="button button-small" to="/planner">Get started</Link><button className="menu-toggle icon-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
  </div></header>
}
