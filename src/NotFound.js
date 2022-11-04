import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        
        <div className="NotFound">
          <h2>Sorry</h2>
          <p>That Page not found</p>
          < Link to="/">Back to the home</Link>
        </div>
     );
}
 
export default NotFound;