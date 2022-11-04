import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title,setTitel] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('mariyo')
    const [pend,setPend] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};
        
       fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers: {"Content-Type":"Application/Json"},
        body:JSON.stringify(blog)
       
       }).then(()=>{
        console.log("adding new blog...")
       history.push('/')
        

       })

       
    }
    return ( 
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
               <label>Bilog Title:</label>
               <input type="text" 
               required 
               value={title} 
               onChange = 
               {
                (e) => setTitel(e.target.value)
               }
               />

               <label>Bilog Body:</label>
               <textarea required
                 value={body}
                 onChange ={(e)=>setBody(e.target.value)}> </textarea> 

               <label>Bilog Author:</label>
               <select 
               value={author}
               onChange = {
                   (e) => setAuthor(e.target.value)
               }>
                 <option value='mriyo'>mriyo</option>
                 <option value='yoshi'>yoshi</option>
                </select> 
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;