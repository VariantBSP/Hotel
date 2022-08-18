import useFetch from "./usefetch";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Booking = () => {

    const { data : blog, error} = useFetch('http://localhost:8000/guests/');
    const [title, setTitle] = useState('');
    const [body, setBody]  = useState('');
    const [author, setAuthor] = useState('');
    const [IsPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/guests', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="book">
            <h2>Fill in your information here </h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Date of arrival</label>
                <input type="date"
                    required
                    value= { body }
                    onChange = {(e) => setBody(e.target.value)}
                />
                <label>Your E-mail</label>
                <input
                    type="email"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                
                { !IsPending && <button>Book</button>}
                { IsPending && <button disabled>Booking...</button>}

            </form>
        </div>
     );
}
 
export default Booking;