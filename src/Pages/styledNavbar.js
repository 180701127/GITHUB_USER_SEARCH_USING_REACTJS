import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from '../Shopping_Cart/ContextApi';

const StyleNavbar=()=> {
    const {cart, setcart} = useContext(Container);
    return (
<nav>
    <NavLink to='/MyPages/home' style={(({isActive})=>{
        return {
            color:isActive?'black':'black'
        }
    })}> Go To Home Page </NavLink> <br/>
    <NavLink to='/MyPages/about' style={(({isActive})=>{
        return {
            color:isActive?'black':'black'
        }
    })}> Go to about Page </NavLink> <br/>
    <NavLink to='/MyPages/github' style={(({isActive})=>{
        return {
            color:isActive?'black':'black'
        }
    })}> Go to Github Page </NavLink> <br/>
    

    
    
    
    
   


</nav>
    )
}

export default StyleNavbar;
