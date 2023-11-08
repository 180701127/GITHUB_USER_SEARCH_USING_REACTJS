import {Link} from 'react-router-dom';
const Navbar=()=> {
    return (
<nav>
    <Link to='/MyPages'> HOME </Link>
    <Link to='/MyPages/about'> ABOUT </Link>
    <Link to='/MyPages/github'> GITHUB </Link>
</nav>
    )
}

export default Navbar;