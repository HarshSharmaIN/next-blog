import classes from "./featured-posts.module.css"
import PostGrid from "@/components/posts/post-grid";
export default function FeaturedPost(props) {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={props.posts}/>
        </section>
    )
}