import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


function Navi() {

    const [isMouseOver, setMouseOver] = useState(false);
    const [isClikced, setClick] = useState(false);

    function mouseOver() {
        setMouseOver(true);
    }
    
    function mouseOut() {
        setMouseOver(false);
    }

    function mouseClick() {
        setClick(true);
    }

    function mouseLeave() {
        setClick(false);
    }
    
    return <nav>
        <a href="/">
            <img src= "imgs/logo.png" alt="logo" />
        </a>

        <input type="checkbox" id="nav-toggle" class="nav-toggle"/>

        <ul className="nav-list">
            <li><a href="">Learn</a></li>
            <li><a href="">Use</a></li>
            <li><a href="">Develop</a></li>
            <li><a href="">Participate</a></li>
            <div className="search-box"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                style={{backgroundColor: isMouseOver ? "white" : null,
                borderColor: isMouseOver ? "black" : null, 
            }}
            >
            <SearchIcon className= "search-icon" style={{color: isMouseOver ? "black" : null}}/>
            <input 
                type="text" 
                placeholder="Search"
            />
            </div>
        </ul>

        <label htmlFor="nav-toggle" className="nav-toggle-label"> 
            <MenuIcon 
            className="hamburger" 
            style={{color: isClikced ? "black" : "white", fontSize: "32px"}}
            onClick={mouseClick}
            onMouseLeave={mouseLeave}
            />
        </label>
    </nav>
}

export default Navi;