import logo from '../img/logo.png';

const NavBar = () => {
    return ( 
        <nav class="navbar navbar-expand-sm bg-light text-dark">
            <ul class="navbar-nav">
                <a href=""><img src={logo} alt="logo" width="50rem" /></a>
                <li class="nav-item ml-2 mt-2">
                    <a class="nav-link text-dark" href="#" style={{fontFamily:"'Lato', sans-serif", fontWeight:"400"}}>Home</a>
                </li>
                <li class="nav-item mt-2">
                    <a class="nav-link text-dark" href="#" style={{fontFamily:"'Lato', sans-serif", fontWeight:"400"}}>Hardware</a>
                </li>
                <li class="nav-item mt-2">
                    <a class="nav-link text-dark" href="#" style={{fontFamily:"'Lato', sans-serif", fontWeight:"400"}}>Pre-built</a>
                </li>
                <li class="nav-item mt-2">
                    <a class="nav-link text-dark" href="#" style={{fontFamily:"'Lato', sans-serif", fontWeight:"400"}}>Build your own</a>
                </li>
                <div class="nav-item mt-3">
                    <a class="" href="#" style={{color: "grey"}}><span class="material-icons">shopping_cart</span></a>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;