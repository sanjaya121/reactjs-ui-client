
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import './navaccount.scss'

const NavAccount=()=>{

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
                    <ShoppingBagIcon/>
                </div>
         
            </div>
           </div>
        </div>
    )

    
}

export default NavAccount;