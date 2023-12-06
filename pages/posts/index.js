import AllPosts from "@/components/posts/all-posts";
import { getAllposts } from "@/lib/post-util";
import Head from "next/head";
import { Fragment } from "react";

export default function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programming-related tutorials and posts!" />
            </Head>
            <AllPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    const allPosts = getAllposts();

    return {
        props: {
            posts: allPosts
        }
    }
} 