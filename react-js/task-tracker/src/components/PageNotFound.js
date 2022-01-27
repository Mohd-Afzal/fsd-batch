import { Link } from "react-router-dom";

function PageNotFound() {

    return (
        <div className="container" >
            <h3> 404 Error! </h3>
            <h4> Page you requested is missing in the intersteller space! </h4>
            <h5> Try after 6 million light years! </h5>

            <Link to = "/home"> Go Back To Home! </Link>
        </div>
    );
}

export default PageNotFound;