import PropTypes from 'prop-types';

// 1. Function Based Component
function Header (props) {
    return (
        // JSX Code -> HTML, CSS and JavaScript
        // React Fragment
        <>
            <header>
                {/* <h1 className="header"> This is a Basic Header Component! </h1> */}
                <h1 className="page-header"> Hey, {props.name}! I am {props.age} years old. </h1>
            </header>

            <button style = {{backgroundColor: 'red', color: 'white'}} > Click Me! </button>
        </>
        
    );
}

Header.defaultProps = {
    name: "World",
    age: 5000000000000
}

Header.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

// import { Component } from "react";


// 2. Class Based Component
// class Header extends Component {
//     render () {
//         return (
//             // JSX Code
//            <header>
//                 <h1> This is a Basic Header Component! </h1>
//            </header>
//         )
//     }
// }

export default Header;