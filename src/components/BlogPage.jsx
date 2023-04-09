import { Link, Outlet } from "react-router-dom";
import { blogdata } from "../blogdata"

export const BlogPage = () => {
        
    return (
        <>
            BlogPage

            <Outlet />

            <ul>
                {
                    blogdata.map( post => (
                        <BlogLink key={post.slug} post={post}/>
                    ))
                }
            </ul>
            
        </>
    )
}

const BlogLink = ({post}) => {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{ post.title }</Link>
        </li>
    );
}
