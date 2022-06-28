import React from 'react';
import Menu from './Menu';
import '../App.css';

function Header(props) {
    return (
        <header className='header'>
            <h1>{props.name}</h1>
            <Menu nav={props.nav} stage={props.stage}> </Menu>
        </header>
    )
}

export default Header