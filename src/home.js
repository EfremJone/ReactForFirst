
import BlogLists from "./BlogList";
import useFatch from "./useFatch";

const Home = () => {
   
   const {data:blogs,isPending,error} = useFatch('http://localhost:8000/blogs')
    return ( 
        <div className="home">  
        {error && <div>{error}</div>}
        {isPending && <div> Loading....... </div>}      
        {blogs && <BlogLists blogs={blogs} titel="All blogis"/>}
        </div>
        
     );
}
 
export default Home;