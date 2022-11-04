import { useHistory, useParams } from "react-router-dom";
import useFatch from "./useFatch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blogs,isPending,error} = useFatch('http://localhost:8000/blogs/' + id)
    const history = useHistory();
    const handlClick = () =>
    {
      fetch('http://localhost:8000/blogs/' + blogs.id , 
      {
        method: 'DELETE'
      }).then(()=>
      {
        history.push('/');
      })
      
    }
    return ( 
        <div className="div-blog-details">
            {error && <div>{error}</div>}
            {isPending && <div> Loading....... </div>}      
            {blogs && 
            <article>
                <h2>{blogs.title}</h2>
                <p>Written By:{blogs.author}</p>
                <div>{blogs.body}</div>
                <button onClick={handlClick} class="btn btn-danger">Danger</button>
                
            </article>
             }
            
        </div>
     );
}
 
export default BlogDetails;
