
import { Link } from "react-router-dom";

function NavBar() {

    const googleLink = "https://www.google.com/";
    const facebookLink = "https://www.facebook.com/";
    const innomaticsLink = "https://www.innomatics.in/";

    return (
        <div>
            <nav className="navbar">
                <div className="links">
                    <Link to = "/home" > Home </Link>
                    <Link to = "/add-person" > Add Person </ Link>
                    <Link to = {googleLink} > Google Search </ Link>
                    <Link to = {facebookLink} > Facebook Home </ Link>
                    <Link to = {innomaticsLink} > Innomatics Home </ Link>                
                    <Link to = "/contact-us" > Contact Us </ Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;