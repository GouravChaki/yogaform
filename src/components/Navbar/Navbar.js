import React from 'react'
import Logo from './../Logo/yoga-1-logo-png-transparent.png'
import Rendernavbar from './Rendernavbar'
export default function Navbar(props) {
  const rendering=[{
    key: 1,
    name:'Home',
    path:'/home'
  },
  {
    key: 2,
    name:'About',
    path:'/about'
  },
  {
    key: 3,
    name:'Register',
    path:'/register'
  },
  {
    key: 4,
    name:'Card',
    path:'/card'
  }]
  const go=(item)=>{
    return <Rendernavbar key={item.key} item={item}/>
  }
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand">
      <h3><img src={Logo} alt="Logo" width="50" height="50" className="d-inline-block"/>Yogalite</h3>
  </a>
  <div className="d-flex navbar" id="navbarNav">
      <div>
      <ul className="navbar-nav">{rendering.map(go)}</ul>
      </div>
  </div>
  </div>
</nav>
  )
}
