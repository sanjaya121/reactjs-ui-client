
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import './navaccount.scss'
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Link } from 'react-router-dom';


const NavAccount=()=>{

    const cartItems =useSelector((state:RootState)=>state.cart.cart)
    console.log(cartItems,"Cart ITems")

    return(
        <div className="navbar-account">
           <div className="account-icon-container">
            <div className="icons">
                <div className="search-icon icon">
                <SearchIcon />
                </div>
                <div className="favorites icon">
                    <FavoriteBorderIcon/>
                </div>
                <div className="shopping-cart icon">
                    <Badge className="sanjaya"badgeContent={cartItems.length}>
                        <Link to="/shopping-cart">
                        <ShoppingBagIcon />
                        </Link>
                   
                    </Badge>
                
                </div>
         
            </div>
           </div>
        </div>
    )

    
}

export default NavAccount;