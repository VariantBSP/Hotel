import BlogList from "./BlogList";
import useFetch from "./usefetch";


const Home = () => {
    const { data: blogs, IsPending, error }= useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="body">
        <div className="home">
            { error && <div>{ error }</div>}
            { IsPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={ blogs } title= "Available Rooms" />}
        </div>
        </div>
     );
}
 
export default Home;