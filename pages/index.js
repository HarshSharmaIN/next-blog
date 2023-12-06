import {Fragment} from "react";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/post-util";
import Head from "next/head";

export default function Home(props) {
    return (
        <Fragment>
            <Head>
                <title>Harsh's Blog</title>
                <meta name="description" content="I post about programming and web development." />
            </Head>
            <Hero/>
            <FeaturedPost posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    
    return {
        props: {
            posts: featuredPosts
        },
    }
}