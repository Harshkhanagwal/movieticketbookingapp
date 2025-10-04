import React from 'react'
import './Aside.css'
import { NavLink } from 'react-router-dom';

// icons
import { MdSpaceDashboard } from "react-icons/md";
import { TbDatabaseImport } from "react-icons/tb";
import { RiHome4Line } from "react-icons/ri";
import { GiTheater } from "react-icons/gi";
const Aside = () => {
  return (
    <aside>
      <span className='dashboard-title'>Dashboard</span>

      <nav>
        <NavLink to={'/'} className={"navlink"}>
          <RiHome4Line className='nav-icon' /> <span>  Home</span>
        </NavLink>
        <NavLink to={'/import-movies'} className={"navlink"}>
          <TbDatabaseImport className='nav-icon' /> <span>  Import Movies</span>
        </NavLink>
        <NavLink to={'/theaters'} className={"navlink"}>
          <GiTheater className='nav-icon' /><span> Theaters</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Aside