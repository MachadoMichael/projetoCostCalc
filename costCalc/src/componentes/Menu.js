import React from "react"

function Menu(props) {
    const changeStage = props.stage
    const listNav = props.nav.map((nav, index) =>
        <li key={index}><div onClick={() => { changeStage(index) }} className="menuNav">{nav}</div></li>)

    return <ul className="menu">
        {listNav}
    </ul >
}

export default Menu;