import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const BlogLists = ({blogs,titel,}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{titel}</h2>
           {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
               <Link to={`/Blog/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
           
          </Link>
                
            </div>
         ))}
        </div>
        
     );
}
 
export default BlogLists;