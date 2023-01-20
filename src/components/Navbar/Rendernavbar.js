import React from 'react'
import { Link } from 'react-router-dom'
export default function Rendernavbar(props) {
  return (
    <li className="nav-item">
    <Link className="nav-item nav-link active" to={props.item.path}>{props.item.name}</Link>
   </li>
  )
}
