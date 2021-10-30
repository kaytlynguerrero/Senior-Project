import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';


function MainNavigation() {
    return (
    <header className={classes.header}>
    <div className={classes.logo}>Welcome to Profitable Choice!</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to= '/Register'>Register </Link>
            </li>
            <li>
                <Link to= '/Log-in'> Log-in </Link>
            </li>
            <li>
                <Link to= '/Ticker'> Search Ticker! </Link>
            </li>
        </ul>
    </nav>
</header>

    )
}
export default MainNavigation;