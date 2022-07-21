import React from "react"
import { Link } from 'react-router-dom'

function Menu(props) {
       
        const listNav = props.nav.map((nav, index) =>
            <li key={index}><Link to={`/${nav}`} className="menuNav">{nav}</Link></li>)

        return <ul className="menu">
            {listNav}
        </ul >
    }

export default Menu;