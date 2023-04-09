import { useNavigate, useParams } from "react-router-dom";

import { blogdata } from "../blogdata";


export const BlogPost = () => {

    const {slug} = useParams();
    const navigate = useNavigate();

    const blogpost = blogdata.find(post => post.slug === slug);

    const returnToBlog = () => {
        navigate('/blog');
        
        // Si deseas que el usuario no pueda volver a la pantalla anterior,
        // navigate('/', { replace: true });

    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    )
}
