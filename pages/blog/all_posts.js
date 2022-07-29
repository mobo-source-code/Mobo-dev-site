import axios from "axios";
import Link from "next/link";
import Nav from "../../components/nav";
import Image from "next/image";
import Footer from "../../components/footer";
import { NextSeo } from "next-seo";

const All_Posts = ({posts}) => {
    

    const SEO = {
        title: 'MoboDev Blog Section for Insight and Guidance about how to use technology to grow your business',
        description: 'In this blog section written by Mohammed Bouaziz, you will know how to grow your business using technology, the insight offered here have helped many businesses overcome challenges and reach peak performance across various industries',
        openGraph: {
            title: 'MoboDev Blog Section for Insight and Guidance about how to use technology to grow your business',
            description: 'In this blog section written by Mohammed Bouaziz, you will know how to grow your business using technology, the insight offered here have helped many businesses overcome challenges and reach peak performance across various industries'
        }
    }

    return (
        <>
        <NextSeo {...SEO}/>
        <Nav />
        <div className="mt-28 text-center text-3xl font-bold">For Insight & Guidance</div>
        <div className="mt-28 flex flex-col space-y-10">
            {posts ? posts.map( p => (
                <Link href={`/blog/${p.id}`}>
                    <div className="flex flex-col md:flex-row md:my-10 items-center justify-center border-b-8 border-gray-500 space-x-10 cursor-pointer p-4 rounded-lg hover:bg-gray-300 hover:rounded-lg hover:p-6 transition ease-in duration-300">
                            <div className="flex flex-col w-full pr-8 md:pr-0 md:w-full">
                                <div className="font-bold text-3xl text-left">{p.attributes.title}</div>
                                <p className="text-xl text-left mt-3">{p.attributes.description}</p>
                            </div>    
                </div> 
               </Link>
            )) : <div>No post</div>}
        </div>
        </>
    )
}

export default All_Posts

export let getServerSideProps = async () => {
    const res = await axios.get("https://mobodev.herokuapp.com/api/posts?populate=*")
    const posts = res.data.data

    
    return {
        props: {
            posts: posts,
        }
    }
}