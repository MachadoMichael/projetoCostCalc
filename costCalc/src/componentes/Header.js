import React from 'react';
import Menu from './Menu';
import '../App.css';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header className='header'>
            <h1><Link id='logo' to={'/'}>{props.name}</Link></h1>
            <Menu nav={props.nav}> </Menu>
        </header>
    )
}

export default Header