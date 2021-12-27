// 1. Function Based Component
function Header (props) {
    return (
        // JSX Code
        <header>
            {/* <h1 className="header"> This is a Basic Header Component! </h1> */}
            <h1 className="page-header"> {props.title} <small> {props.id} </small> </h1>
        </header>
    );
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