import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody]  = useState('');
    const [author, setAuthor] = useState('');
    const [IsPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
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
        <div className="create">
            <h2>Tell Us How We Can Help</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Message</label>
                <textarea
                    required
                    value= { body }
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Your E-mail</label>
                <input
                    type="email"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                
                { !IsPending && <button>Send Message</button>}
                { IsPending && <button disabled>Sending...</button>}

            </form>
        </div>
     );
}
 
export default Create;
