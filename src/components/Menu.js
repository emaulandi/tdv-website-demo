import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Accueil</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/events">Rencontres</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Le Club</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Hackaviz</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Nos Offres</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Ressources et collection</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">On parle de nous</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="_blank" className="button special fit">Rejoindre le Club</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
