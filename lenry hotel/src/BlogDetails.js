import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data : blog, IsPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history= useHistory();

/*    const hanleClick= () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/');
        })
    }
*/
        const hanleClick = () => {
            history.push('/Booking')
        }

    return ( 
        <div className="blog-details">
            { IsPending && <div>Loading</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <img src="/images/room.jpg" alt="resource missing"/>
                    <h2>{ blog.title }</h2>
                    <p>Price { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={hanleClick}>Book this room</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;